import texts from "../../data/texts.json";
import { Container } from "../reusableComponents/container/Container";
import { LinkFull } from "../reusableComponents/linkFull/LinkFull";
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

export const Faq = () => {
  return (
    <Section id="faq">
      <Container>
        <OrderWrap>
          <TitleWrap>
            <Title>{texts.faq.title}</Title>
          </TitleWrap>
          <FaqListWrap>
            <FaqList />
          </FaqListWrap>
        </OrderWrap>
        <Wrap>
          <Text id="contactUs">{texts.faq.text}</Text>
          <LinkFull nameLink="Contact Us" href="#contactUs" />
        </Wrap>
      </Container>
    </Section>
  );
};
