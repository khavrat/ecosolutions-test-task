import { useState, useLayoutEffect, useEffect } from "react";
import { changedColorHeader } from "../../helpers/changedColorHeader";
import { Container } from "../reusableComponents/container/Container";
import { LinkFull } from "../reusableComponents/linkFull/LinkFull";
import { Logo } from "../reusableComponents/logo/Logo";
import { ButtonOpen } from "../menu/buttonOpen/ButtonOpen";
import { HeaderEl, HeaderWrap, Wrap } from "./Header.styled";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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


  return (
    <>
      <HeaderEl>
        <Container>
          <HeaderWrap>
            <Logo />
            <Wrap>
              <ButtonOpen type="button"/>
              {windowWidth >= 768 ? (
                <LinkFull href="#contactUs" nameLink="Get in touch"></LinkFull>
              ) : (
                ""
              )}
            </Wrap>
          </HeaderWrap>
        </Container>
      </HeaderEl>
    </>
  );
};
