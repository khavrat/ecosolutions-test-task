import { Container } from "../container/Container";
import { FagList } from "./FaqList";
import { Section, Title, Wrapper, Text } from "./Faq.styled"
import { ButtonFull } from "../reusableComponents/buttonFull/ButtonFull";

export const Faq = () => {
  return (
    <Section>
      <Container>
        <Title>Frequently Asked Questions</Title>
        <FagList />
        <Wrapper>
          <Text>Didn't find the answer to your question? </Text>
          <ButtonFull nameButton="Contact Us" />
        </Wrapper>
      </Container>
    </Section>
  );
};
