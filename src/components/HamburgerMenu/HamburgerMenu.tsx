import React from "react";

interface HamburgerMenuProps {
  opened: boolean;
  onClick: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  onClick,
  opened,
}) => {
  return (
    <div onClick={onClick} className="ham-menu">
      <div className={!opened ? "ham-line" : "ham-line ham-line-top"} />
      <div className={!opened ? "ham-line" : "ham-line ham-line-mid"} />
      <div className={!opened ? "ham-line" : "ham-line ham-line-bottom"} />
    </div>
  );
};
