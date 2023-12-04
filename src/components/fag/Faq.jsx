import { Container } from "../reusableComponents/container/Container";
import { FaqList } from "./FaqList";
import {
  Section,
  OrderWrap,
  TitleWrap,
  Title,
  Wrap,
  FaqListWrap,
  Text,
} from "./Faq.styled";
import { LinkFull } from "../reusableComponents/linkFull/LinkFull";

export const Faq = () => {
  return (
    <Section id="faq">
      <Container>
        <OrderWrap>
          <TitleWrap>
            <Title>Frequently Asked Questions</Title>
          </TitleWrap>
          <FaqListWrap>
            <FaqList />
          </FaqListWrap>
        </OrderWrap>
        <Wrap>
          <Text id="contactUs">Didn't find the answer to your question? </Text>
          <LinkFull nameLink="Contact Us" href="#contactUs" />
        </Wrap>
      </Container>
    </Section>
  );
};
