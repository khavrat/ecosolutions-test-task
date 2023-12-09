import { useState } from "react";
import logo from "../../../images/icons/logo.svg";
import logoHover from "../../../images/icons/logoHover.svg";

export const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <a
      href="# "
      aria-label="go to the main"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {isHovered ? (
        <img src={logoHover} alt="logo" />
      ) : (
        <img src={logo} alt="logo" />
      )}
    </a>
  );
};
