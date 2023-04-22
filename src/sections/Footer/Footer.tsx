import { Button, Logo } from "components";
import React from "react";

const FacebookIcon = require("../../assets/svgs/facebook.svg");
const LinkedinIcon = require("../../assets/svgs/linkedin.svg");
const TwitterIcon = require("../../assets/imgs/twitter-icon.png");

interface FooterProps {
  company_data: {
    address: string;
    phone: string;
    email: string;
    logo: string;
    name: string;
    social_media: {
      facebook: string;
      instagram: string;
      linkedin: string;
      twitter: string;
    };
    intro: string;
  };

  footer_menu: {
    name: string;
    url: string;
    order: number;
  }[];
}

export const Footer: React.FC<FooterProps> = ({
  company_data,
  footer_menu,
}) => {
  const { address, email, intro, logo, name, phone, social_media } =
    company_data;

  const { facebook, linkedin, twitter } = social_media;

  const sortedFooterMenu = footer_menu.sort((a, b) => a.order - b.order);

  const linksGroup1 = sortedFooterMenu.slice(0, 4);
  const linksGroup2 = sortedFooterMenu.slice(4);

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <img src={logo} alt="footer_logo" width={230} height={85} />
          <a href="#contact">
            <Button>request a call</Button>
          </a>
        </div>
        <div className="footer-bottom">
          <div className="footer-1">
            <ul>
              {linksGroup1.map((link) => (
                <li key={link.name}>
                  <a className="h3" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h5 className="h5">{intro}</h5>
          </div>
          <div className="footer-2">
            <ul>
              {linksGroup2.map((link) => (
                <li key={link.name}>
                  <a className="h3" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-3">
            <h3 className="h3">Follow us:</h3>
            <div className="footer-icons">
              <a
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
                href={facebook}
              >
                <FacebookIcon.ReactComponent />
              </a>
              <a
                className="footer-icon"
                target="_blank"
                rel="noreferrer"
                href={twitter}
              >
                <img
                  src={TwitterIcon}
                  alt="twitter-icon"
                  width={50}
                  height={50}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
                href={linkedin}
              >
                <LinkedinIcon.ReactComponent />
              </a>
            </div>
            <h3 className="h3">Contact</h3>
            <h5 className="h5">
              <a
                target="_blank"
                rel="noreferrer"
                href={`http://maps.google.com/?q=${address}`}
              >
                {address}
              </a>
            </h5>
            <h5 className="h5">
              <a href={`tel:${phone}`}>Phone: {phone}</a>
            </h5>
            <h5 className="h5">
              Web:{" "}
              <a href={`mailto:${email}`} className="web">
                {email}
              </a>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};
