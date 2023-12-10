import { useState, useLayoutEffect } from "react";
import texts from "../../data/texts.json";
import { scrollTo } from "../../helpers/scrollTo";
import { Container } from "../reusableComponents/container/Container";
import { ButtonEmpty } from "../reusableComponents/buttonEmpty/ButtonEmpty";
import { AddressEl } from "../reusableComponents/contacts/AddressEl";
import { MailEl } from "../reusableComponents/contacts/MailEl";
import { CopyrightEl } from "../reusableComponents/contacts/CopyrightEl";
import { MainImage } from "./MainImage";
import {
  Section,
  Wrap,
  TitleWrap,
  HeadTitle,
  Box,
  Text,
  AdressWrap,
  AdressElWrap,
  CopyWrap,
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
    <Section id="main">
      <Container>
        <Wrap>
          <TitleWrap>
            <HeadTitle>{texts.main.title}</HeadTitle>
          </TitleWrap>
          <Box>
            <Text>{texts.main.discription}</Text>
            <ButtonEmpty
              nameButton="Learn more"
              type="button"
              onClick={() => scrollTo("cases")}
            ></ButtonEmpty>
          </Box>
        </Wrap>
        <AdressWrap>
          <AdressElWrap>
            <AddressEl />
          </AdressElWrap>
          <CopyWrap>
            <MailEl />
            {windowWidth >= 768 ? <CopyrightEl /> : ""}
          </CopyWrap>
        </AdressWrap>
        <MainImage />
      </Container>
    </Section>
  );
};
