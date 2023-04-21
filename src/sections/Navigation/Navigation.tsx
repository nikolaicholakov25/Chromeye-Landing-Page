import React, { useState } from "react";
import { Button, HamburgerMenu, Logo } from "../../components";

interface NavigationProps {
  menu: {
    name: string;
    url: string;
    order: number;
  }[];
}

export const Naviation: React.FC<NavigationProps> = ({ menu }) => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  return (
    <header>
      <nav className="nav">
        <div className="navigation">
          <div className="nav-start">
            <a href="/">
              <Logo />
            </a>
            <HamburgerMenu
              onClick={() => setOpenNavigation(!openNavigation)}
              opened={openNavigation}
            />
          </div>
          <ul
            className={openNavigation ? "nav-list nav-list-open" : "nav-list"}
          >
            {menu.map((listItem) => (
              <li key={listItem.name}>
                {listItem.name === "Get in touch" ? (
                  <a href={listItem.url}>
                    <Button>{listItem.name.toUpperCase()}</Button>
                  </a>
                ) : (
                  <a href={listItem.url}>{listItem.name.toUpperCase()}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
