import { Container } from "../reusableComponents/container/Container";
import { FaqList } from "./FaqList";
import {
  Section,
  OrderWrapper,
  TitleWrapper,
  Title,
  Wrapper,
  FaqListWrapper,
  Text,
} from "./Faq.styled";
import { LinkFull } from "../reusableComponents/linkFull/LinkFull";

export const Faq = () => {
  return (
    <Section id="faq">
      <Container>
        <OrderWrapper>
          <TitleWrapper>
            <Title>Frequently Asked Questions</Title>
          </TitleWrapper>
          <FaqListWrapper>
            <FaqList />
          </FaqListWrapper>
        </OrderWrapper>
        <Wrapper>
          <Text id="contactUs">Didn't find the answer to your question? </Text>
          <LinkFull nameLink="Contact Us" href="#contactUs" />
        </Wrapper>
      </Container>
    </Section>
  );
};
