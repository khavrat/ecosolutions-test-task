import { Container } from "../container/Container";
import { Description } from "../reusableComponents/sectionDescr/Descr";
import { Grid } from "../about/Grid";
import {
  Section,
  WrapperContent,
  WrapperTitle, Title, WrapperDescr,
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
            <Description
              text="EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs."
            ></Description>
          </WrapperDescr>
        </WrapperContent>
        <Grid />
      </Container>
    </Section>
  );
};
