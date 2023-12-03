import { Container } from "../reusableComponents/container/Container";
import { Logo } from "../reusableComponents/logo/Logo";
import { NetLinkBlack } from "../reusableComponents/netLinkSet/NetLinkBlack";
import { AddressEl } from "../reusableComponents/contacts/AddressEl";
import { MailEl } from "../reusableComponents/contacts/MailEl";
import { CopyrightEl } from "../reusableComponents/contacts/CopyrightEl";
import { FooterEl, Wrapper, AddressWrapper } from "./Footer.styled";
import { ButtonRound } from "../reusableComponents/buttonRound/ButtonRound";
import { scrollTo } from "../../helpers/scrollTo";

export const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <Wrapper>
          <Logo onClick={() => scrollTo("main")} />
          <ButtonRound onClick={() => scrollTo("main")} />
          <NetLinkBlack />
        </Wrapper>
        <AddressWrapper>
          <AddressEl />
          <MailEl />
          <CopyrightEl />
        </AddressWrapper>
      </Container>
    </FooterEl>
  );
};
