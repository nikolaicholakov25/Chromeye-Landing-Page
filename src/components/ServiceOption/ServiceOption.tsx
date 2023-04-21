import React, { useState } from "react";
const CheckComponent = require("../../assets/svgs/check-highlights.svg");

interface ServiceOptionProps {
  title: string;
  description: string;
  icon: string;
  state: boolean;
}

export const ServiceOption: React.FC<ServiceOptionProps> = ({
  description,
  icon,
  title,
  state,
}) => {
  const [openInfo, setOpenInfo] = useState(state);

  return (
    <div className="service-option">
      <div className="check">
        <CheckComponent.ReactComponent />
      </div>
      <h2 className="service-title">{title}</h2>
      <div
        className={openInfo ? "expand-info" : "expand-info expand-info-closed"}
        onClick={() => setOpenInfo(!openInfo)}
      >
        {openInfo ? (
          <>
            <div className="plus" />
            <div className="plus plus-up plus-transition" />
          </>
        ) : (
          <>
            <div className="plus" />
            <div className="plus plus-up" />
          </>
        )}
      </div>
      <p
        className={openInfo ? "service-info service-info-open" : "service-info"}
      >
        {description}
      </p>
    </div>
  );
};
