import React from "react";

export const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </section>
  );
};

export default SectionTitle;
