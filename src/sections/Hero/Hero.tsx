import { Button, Section } from "components";
import React from "react";
const heroBanner = require("../../assets/imgs/hero-img-2.png");

interface HeroProps {
  title: string;
  paragraph: string;
  button: string;
}

export const Hero: React.FC<HeroProps> = ({ title, button, paragraph }) => {
  return (
    <Section>
      <div className="gradiant">
        <div className="section hero-container">
          <div className="hero-text">
            <h1 className="hero-title">{title}</h1>
            <p className="paragraph">{paragraph}</p>
            <Button cyanite>{button}</Button>
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
