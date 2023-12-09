import { useState } from "react";
import { Burger } from "./ButtonOpen.styled";
import menu from "../../../images/icons/menu.svg";
import { Menu } from "../Menu";

export const ButtonOpen = ({ type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Burger type={type} onClick={toggleMenu} aria-label="open the menu">
        <img src={menu} alt="button menu" width="16" height="16" />
      </Burger>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};
