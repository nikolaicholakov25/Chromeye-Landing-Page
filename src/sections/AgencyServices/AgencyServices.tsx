import { Button, Section } from "components";
import React, { useState } from "react";

const ArrowDown = require("../../assets/svgs/arrow-down.svg");
const ArrowUp = require("../../assets/svgs/arrow-up.svg");

interface AgencyServicesProps {
  title: string;
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const AgencyServices: React.FC<AgencyServicesProps> = ({
  items,
  title,
}) => {
  const [sectionImage, setSectionImg] = useState<string>(items[2].image);
  const [sectionOpened, setSectionOpened] = useState<string>(items[2].title);

  const changeService =
    (item: { title: string; description: string; image: string }) => () => {
      setSectionImg(item.image);
      setSectionOpened(item.title);
    };

  return (
    <Section>
      <div className="section agency-services-container">
        <h2 className="h2 agency-title">{title}</h2>
        <div className="section-info-container">
          <div className="agency-services-options">
            {items.map((item) => (
              <div
                key={`agency-service-${item.title}`}
                className={
                  sectionOpened === item.title
                    ? "agency-service-option bg-light-grey"
                    : "agency-service-option"
                }
                onClick={changeService(item)}
              >
                <div className="flex">
                  <span
                    className={
                      sectionOpened === item.title
                        ? "p weight-500 blue-text"
                        : "p weight-500"
                    }
                  >
                    {item.title}
                  </span>
                  <div className="arrow">
                    {sectionOpened === item.title ? (
                      <ArrowUp.ReactComponent />
                    ) : (
                      <ArrowDown.ReactComponent />
                    )}
                  </div>
                </div>
                {sectionOpened === item.title && (
                  <h5 className="h5 service-info-text">{item.description}</h5>
                )}
              </div>
            ))}
          </div>
          <img
            src={sectionImage}
            alt="service-img"
            className="agency-service-img"
          />
        </div>
      </div>
    </Section>
  );
};
