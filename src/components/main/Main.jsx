import { useState, useLayoutEffect } from "react";
import { Container } from "../reusableComponents/container/Container";
import { ButtonEmpty } from "../reusableComponents/buttonEmpty/ButtonEmpty";
import { AddressEl } from "../reusableComponents/contacts/AddressEl";
import { MailEl } from "../reusableComponents/contacts/MailEl";
import { CopyrightEl } from "../reusableComponents/contacts/CopyrightEl";
import { MainImage } from "./MainImage";
import {
  Section,
  Wrapper,
  TitleWrapper,
  HeadTitle,
  Box,
  Text,
  AdressWrapper,
  AdressElWrapper,
  CopyWrapper,
} from "./Main.styled";

export const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <Section>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <HeadTitle>RENEWABLE ENERGY For any task</HeadTitle>
          </TitleWrapper>
          <Box>
            <Text>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </Text>
            <ButtonEmpty nameButton="Learn more" type="button"></ButtonEmpty>
          </Box>
        </Wrapper>
        <AdressWrapper>
          <AdressElWrapper>
            <AddressEl />
          </AdressElWrapper>
          <CopyWrapper>
            <MailEl />
            {windowWidth >= 768 ? <CopyrightEl /> : ""}
          </CopyWrapper>
        </AdressWrapper>
        <MainImage />
      </Container>
    </Section>
  );
};
