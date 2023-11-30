import { useState, useLayoutEffect, useEffect } from "react";
import logo from "../../images/icons/logo.svg";
import logoHover from "../../images/icons/logoHover.svg";
import menu from "../../images/icons/menu.svg";
import { Container } from "../container/Container";
import { HeaderBlock, HeaderWrapper, Burger, Wrapper } from "./Header.styled";
import { ButtonFull } from "../reusableComponents/buttonFull/ButtonFull";
import { changedColorHeader } from "../../helpers/changedColorHeader";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <HeaderBlock>
      <Container>
        <HeaderWrapper>
          <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
            {isHovered ? (
              <img src={logoHover} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}
          </div>
          <Wrapper>
            <Burger>
              <img src={menu} alt="button menu" />
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
  );
};
