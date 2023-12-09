import { scrollTo } from "../../helpers/scrollTo";
import { Container } from "../reusableComponents/container/Container";
import { Logo } from "../reusableComponents/logo/Logo";
import { NetLinkBlack } from "../reusableComponents/netLinkSet/NetLinkBlack";
import { AddressEl } from "../reusableComponents/contacts/AddressEl";
import { MailEl } from "../reusableComponents/contacts/MailEl";
import { CopyrightEl } from "../reusableComponents/contacts/CopyrightEl";
import { ButtonRound } from "../reusableComponents/buttonRound/ButtonRound";
import { FooterEl, Wrap, AddressWrap } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <Wrap>
          <Logo onClick={() => scrollTo("main")} />
          <ButtonRound type="button" onClick={() => scrollTo("main")} />
          <NetLinkBlack />
        </Wrap>
        <AddressWrap>
          <AddressEl />
          <MailEl />
          <CopyrightEl />
        </AddressWrap>
      </Container>
    </FooterEl>
  );
};
