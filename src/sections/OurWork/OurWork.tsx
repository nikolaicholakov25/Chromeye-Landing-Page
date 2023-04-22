import { Button, Section } from "components";
import React from "react";

const Hand = require("../../assets/svgs/hand.svg");

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

export const OurWork: React.FC<OurWorkProps> = ({
  items,
  title,
  description,
}) => {
  return (
    <Section>
      <div className="section our-work-section">
        <h1 className="section-title h2">{title}</h1>
        <p className="p service-description">{description}</p>
        <div className="our-work-showcase-container">
          {items.map((item, i) => (
            <div key={`work-example-${i}`} className="work-example">
              <img
                className="work-example-img"
                src={item.image}
                alt={`work-example-${item.title}`}
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="work-example-info">
                <h2
                  className={
                    i === 1
                      ? "section-title work-example-title text-left h2"
                      : "section-title work-example-title h2"
                  }
                >
                  {item.title}
                </h2>
                <p className={i === 1 ? "p text-left" : "p text-right"}>
                  {item.description}
                </p>
                <a href={item.buttonLabel}>
                  <Button cyanite>{item.buttonLabel}</Button>
                  {i === 1 && (
                    <div className="hand">
                      <Hand.ReactComponent />
                    </div>
                  )}
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
