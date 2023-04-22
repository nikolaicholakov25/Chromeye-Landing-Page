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
      <h3 className="service-title h3">{title}</h3>
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
        className={
          openInfo ? "service-info service-info-open h5" : "service-info h5"
        }
      >
        {description}
      </p>
    </div>
  );
};
