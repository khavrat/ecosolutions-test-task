import { Container } from "../reusableComponents/container/Container";
import { SliderEl } from "../slider/Slider";
import { Section, Wrapper, Title } from "./Cases.styled";

export const Cases = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>Successful cases of our company</Title>
        </Wrapper>
        <SliderEl />
      </Container>
    </Section>
  );
};
