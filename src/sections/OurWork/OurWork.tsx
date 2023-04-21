import { Button, Section } from "components";
import React from "react";

interface OurWorkProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
    image: string;
  }[];
}

export const OutWork: React.FC<OurWorkProps> = ({
  items,
  title,
  description,
}) => {
  return (
    <Section>
      <div className="section">
        <h1 className="section-title">{title}</h1>
        <p className="paragraph service-description">{description}</p>
      </div>
    </Section>
  );
};
