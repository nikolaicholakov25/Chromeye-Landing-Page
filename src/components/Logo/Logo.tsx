import React from "react";
const LogoSvg = require("../../assets/svgs/logo.svg");
export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <LogoSvg.ReactComponent />
    </div>
  );
};
