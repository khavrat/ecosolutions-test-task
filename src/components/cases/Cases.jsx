import texts from "../../data/texts.json"
import { Container } from "../reusableComponents/container/Container";
import { SliderEl } from "../slider/Slider";
import { Section, Wrap, Title } from "./Cases.styled";

export const Cases = () => {
  return (
    <Section id="cases">
      <Container>
        <Wrap>
          <Title>{texts.cases.title }</Title>
        </Wrap>
        <SliderEl />
      </Container>
    </Section>
  );
};
