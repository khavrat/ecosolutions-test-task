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
import { ButtonFull } from "../reusableComponents/buttonFull/ButtonFull";

export const Faq = () => {
  return (
    <Section>
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
          <Text>Didn't find the answer to your question? </Text>
          <ButtonFull nameButton="Contact Us" type="button"/>
        </Wrapper>
      </Container>
    </Section>
  );
};
