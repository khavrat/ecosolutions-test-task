import { useState, useLayoutEffect, useEffect } from "react";
import logo from "../../images/icons/logo.svg";
import logoHover from "../../images/icons/logoHover.svg";
import menu from "../../images/icons/menu.svg";
import { Container } from "../container/Container";
import { HeaderBlock, HeaderWrapper, Burger, Wrapper } from "./Header.styled";
import { ButtonFull } from "../reusableComponents/buttonFull/ButtonFull";
import { changedColorHeader } from "../../helpers/changedColorHeader";
import { Menu } from "../menu/Menu";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changedColorHeader);
    return () => {
      window.removeEventListener("scroll", changedColorHeader);
    };
  }, []);


  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderBlock>
        <Container>
          <HeaderWrapper>
            <a
              href="# "
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {isHovered ? (
                <img src={logoHover} alt="logo" />
              ) : (
                <img src={logo} alt="logo" />
              )}
            </a>
            <Wrapper>
              <Burger onClick={toggleMenu}>
                <img src={menu} alt="button menu" width="16" height="16"/>
              </Burger>
              {windowWidth >= 768 ? (
                <ButtonFull nameButton="Contact Us"></ButtonFull>
              ) : (
                ""
              )}
            </Wrapper>
          </HeaderWrapper>
        </Container>
      </HeaderBlock>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};
