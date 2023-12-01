import { Container } from "../container/Container";
import { ButtonEmpty } from "../reusableComponents/buttonEmpty/ButtonEmpty";
import { HeroImage } from "./HeroImage";

import {
    Section,
    Wrapper,
    HeadTitle,
  Box,
  Text,
  AdressWrapper,
  Address,
  Mail,
} from "./Main.styled";

export const Main = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <HeadTitle>RENEWABLE ENERGY For any task</HeadTitle>
          <Box>
            <Text>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </Text>
            <ButtonEmpty nameButton="Learn more"></ButtonEmpty>
          </Box>
        </Wrapper>
        <AdressWrapper>
          <Address>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</Address>
          <Mail href="mailto:office@ecosolution.com">
            office@ecosolution.com
          </Mail>
        </AdressWrapper>
        <HeroImage />
      </Container>
    </Section>
  );
};
