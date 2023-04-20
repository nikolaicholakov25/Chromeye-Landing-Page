import React from "react";
import { Button, Logo } from "../../components";

interface NavigationProps {
  menu: {
    name: string;
    url: string;
    order: number;
  }[];
}

export const Naviation: React.FC<NavigationProps> = ({ menu }) => {
  return (
    <nav className="nav">
      <div className="navigation">
        <div className="nav-start">
          <Logo />
        </div>
        <ul className="nav-list">
          {menu.map((listItem) => (
            <li key={listItem.name}>
              {listItem.name === "Get in touch" ? (
                <Button>{listItem.name}</Button>
              ) : (
                listItem.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
