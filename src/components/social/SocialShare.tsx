import React from "react";
import { snsList } from "@/constants/info";

export const SocialShare = () => {
  return (
    <section>
      {snsList.map((el) => (
        <div key={el.label}>{el.label}</div>
      ))}
    </section>
  );
};

export default SocialShare;
