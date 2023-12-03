import { Container } from "../reusableComponents/container/Container";
import { ContactForm } from "../form/ContactForm";
import { ContactBlock } from "../contactUs/ContactBlock"
import {Section, Title, Wrapper} from "./ContactUs.styled"

export const ContactUs = () => {
    return (
      <Section>
        <Container>
          <Title >Contact us</Title>
          <Wrapper>
            <ContactBlock />
            <ContactForm />
          </Wrapper>
        </Container>
      </Section>
    );
}