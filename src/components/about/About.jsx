import { Container } from "../reusableComponents/container/Container";
import { Grid } from "../about/Grid";
import {
  Section,
  WrapperContent,
  WrapperTitle,
  Title,
  WrapperDescr,
  Text
} from "./About.styled";

export const About = () => {
  return (
    <Section>
      <Container>
        <WrapperContent>
          <WrapperTitle>
            <Title>Main values of our company</Title>
          </WrapperTitle>
          <WrapperDescr>
            <Text>
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world's energy needs.
            </Text>
          </WrapperDescr>
        </WrapperContent>
        <Grid />
      </Container>
    </Section>
  );
};
