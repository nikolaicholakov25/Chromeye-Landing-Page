import React, { useState } from "react";
import { Button, HamburgerMenu, Logo } from "../../components";

interface NavigationProps {
  menu: (
    | {
        name: string;
        url: string;
        order: number;
      }
    | {
        name: string;
        url: null;
        order: number;
      }
  )[];
}

export const Naviation: React.FC<NavigationProps> = ({ menu }) => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false);

  return (
    <header className="header">
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
            {menu
              .filter((el) => el.name !== "Contact")
              .map((listItem) => (
                <li className="h4" key={listItem.name}>
                  {listItem.name === "Get in touch" ? (
                    <a href={listItem.url || "/"}>
                      <Button>{listItem.name}</Button>
                    </a>
                  ) : (
                    <a href={listItem.url || "/"}>
                      {listItem.name.toUpperCase()}
                    </a>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
