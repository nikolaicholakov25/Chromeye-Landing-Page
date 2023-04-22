import { Button, Section, ServiceOption } from "components";
import React from "react";

interface ServicesProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
  buttonLabel: string;
  buttonUrl: string;
}

const cardStates = [true, true, false, false];

export const Services: React.FC<ServicesProps> = ({
  items,
  title,
  buttonLabel,
  buttonUrl,
  description,
}) => {
  return (
    <Section>
      <div className="section services-container">
        <h2 className="section-title h2">{title}</h2>
        <p className="p service-description">{description}</p>
        <div className="services-options-container">
          {items.map((item, i) => (
            <ServiceOption
              key={`serviceOption${i}`}
              {...item}
              state={cardStates[i]}
            />
          ))}
        </div>
        <a href={buttonUrl}>
          <Button cyanite>{buttonLabel}</Button>
        </a>
      </div>
    </Section>
  );
};
