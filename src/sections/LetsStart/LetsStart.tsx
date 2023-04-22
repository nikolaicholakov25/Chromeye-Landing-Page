import { Button } from "components";
import React from "react";

const clouds = require("../../assets/imgs/desktop-banner.jpg");
const cloudsMobile = require("../../assets/imgs/clouds-mobile.png");

interface LetsStartProps {}

export const LetsStart: React.FC<LetsStartProps> = (props) => {
  return (
    <section className="flex-section">
      <img
        className="lets-start-banner"
        src={clouds}
        srcSet={`${cloudsMobile} 1150w,${clouds} 1200w`}
        alt="clouds"
        style={{ objectFit: "cover" }}
      />
      <div className="section lets-start-container">
        <h1 className="h1 lets-start-title">Ready to Get started</h1>
        <p className="p lets-start-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed
          scelerisque arcu scelerisque ultricies habitant ac semper lorem.
        </p>
        <Button>Request a call</Button>
      </div>
    </section>
  );
};
