"use client";
import React, { useContext } from "react";
import {
  usePathname,
  useParams,
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "@/i18n/client";
import { LocaleTypes } from "@/i18n/settings";

export const Header = ({}) => {
  const pathName = usePathname();
  const router = useRouter();
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, "common");

  const urlSegments = useSelectedLayoutSegments();

  const handleLocaleChange = (locale: string) => {
    const newLocale = locale;
    router.push(`/${newLocale}/${urlSegments.join("/")}`);
  };

  return (
    <header className="absolute right-4 top-4">
      <Button onClick={() => handleLocaleChange("ko")}>KO</Button>
      <Button onClick={() => handleLocaleChange("en")}>EN</Button>
    </header>
  );
};

export default Header;
