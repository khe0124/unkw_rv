import { createTranslation } from "@/i18n/server";
import { LocaleTypes } from "@/i18n/settings";
import type { Metadata, ResolvingMetadata } from "next";
import SocialShare from "@/components/social/SocialShare";

type Props = {
  params: { locale: LocaleTypes };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
) {
  const { t } = await createTranslation(params.locale, "meta");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await createTranslation(locale, "meta");

  return (
    <>
      <section className="h-screen w-full bg-primary flex flex-col justify-between">
        <div className=" pt-24 px-6 flex flex-col items-start gap-4">
          <h1 className="font-clash font-bold text-5xl flex flex-col">
            <span className="text-inherit">{"UNKNOWN"}</span>
            <div className="flex items-end">
              <span className="text-inherit leading-none">{"RIVER"}</span>
              <div className="w-3 h-3 rounded-lg bg-blue-600 mb-2 ml-2"></div>
            </div>
          </h1>
          <p className="text-lg">{t("description")}</p>
          <div className="w-24 border-t border-solid border-black mt-8"></div>
        </div>
        <div className="">
          <div className="border-t border-solid border-black p-6 flex justify-between items-center">
            <h3 className="font-bold font-clash">UKNW RVR</h3>
            <SocialShare size={30} color="#000" />
          </div>
        </div>
      </section>
      <section className="bg-black py-32 px-6">
        <div className="flex items-center gap-8">
          <h2 className="font-clash text-white font-semibold text-4xl">
            Skills
          </h2>
          <div className="w-16 border-t border-solid border-primary"></div>
        </div>
      </section>
    </>
  );
}
