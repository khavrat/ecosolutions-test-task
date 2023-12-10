import texts from "../../data/texts.json";
import { Container } from "../reusableComponents/container/Container";
import { ContactForm } from "../form/ContactForm";
import { ContactBlock } from "../contactUs/ContactBlock";
import { Section, Title, Wrapper } from "./ContactUs.styled";

export const ContactUs = () => {
  return (
    <Section>
      <Container>
        <Title>{texts.contactUs.title}</Title>
        <Wrapper>
          <ContactBlock />
          <ContactForm />
        </Wrapper>
      </Container>
    </Section>
  );
};
