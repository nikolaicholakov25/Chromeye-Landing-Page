import { Button, Section } from "components";
import React from "react";
const heroBanner = require("../../assets/imgs/hero-img-2.png");

interface HeroProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  image: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  buttonLabel,
  buttonUrl,
  description,
  image,
}) => {
  return (
    <Section>
      <div className="gradiant">
        <div className="section hero-container">
          <div className="hero-text">
            <h1 className="hero-title h1">{title}</h1>
            <p className="p">{description}</p>
            <a href={buttonUrl}>
              <Button cyanite>{buttonLabel}</Button>
            </a>
          </div>
          <img
            className="hero-banner"
            src={heroBanner}
            alt="hero-banner"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
};
