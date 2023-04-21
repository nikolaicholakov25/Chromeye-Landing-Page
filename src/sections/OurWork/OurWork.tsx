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
      <div className="section our-work-section">
        <h1 className="section-title">{title}</h1>
        <p className="paragraph service-description">{description}</p>
        <div className="our-work-showcase-container">
          {items.map((item, i) => (
            <div key={`work-example-${i}`} className="work-example">
              <img
                className="work-example-img"
                src={item.image}
                alt={`work-example-${item.title}`}
              />
              <div className="work-example-info">
                <h2
                  className={
                    i === 1
                      ? "section-title work-example-title text-left"
                      : "section-title work-example-title"
                  }
                >
                  {item.title}
                </h2>
                <p
                  className={
                    i === 1 ? "paragraph text-left" : "paragraph text-right"
                  }
                >
                  {item.description}
                </p>
                <a href={item.buttonLabel}>
                  <Button cyanite>{item.buttonLabel}</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="blue-line" />
    </Section>
  );
};
