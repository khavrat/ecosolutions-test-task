import { useState, useLayoutEffect, useEffect } from "react";
import menu from "../../images/icons/menu.svg";
import { Container } from "../reusableComponents/container/Container";
import { HeaderBlock, HeaderWrapper, Burger, Wrapper } from "./Header.styled";
import { LinkFull } from "../reusableComponents/linkFull/LinkFull";
import { changedColorHeader } from "../../helpers/changedColorHeader";
import { Menu } from "../menu/Menu";
import { Logo } from "../reusableComponents/logo/Logo";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderBlock>
        <Container>
          <HeaderWrapper>
            <Logo />
            <Wrapper>
              <Burger onClick={toggleMenu}>
                <img src={menu} alt="button menu" width="16" height="16" />
              </Burger>
              {windowWidth >= 768 ? (
                <LinkFull href="#contactUs" nameLink="Get in touch"></LinkFull>
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
