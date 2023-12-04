import { Container } from "../reusableComponents/container/Container";
import { Grid } from "../about/Grid";
import {
  Section,
  ContentWrap,
  Title,
  TitleWrap,
  TextWrap,
  Text,
} from "./About.styled";

export const About = () => {
  return (
    <Section id="about">
      <Container>
        <ContentWrap>
          <TitleWrap>
            <Title>Main values of our company</Title>
          </TitleWrap>
          <TextWrap>
            <Text>
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world's energy needs.
            </Text>
          </TextWrap>
        </ContentWrap>
        <Grid />
      </Container>
    </Section>
  );
};
