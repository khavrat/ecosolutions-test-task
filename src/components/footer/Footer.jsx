import { Logo } from "../reusableComponents/logo/Logo";
import { NetLink } from "../reusableComponents/netLinkSet/NetLinkSet";
import { AddressEl } from "../reusableComponents/contacts/AddressEl";
import { MailEl } from "../reusableComponents/contacts/MailEl";
import { CopyrightEl } from "../reusableComponents/contacts/CopyrightEl";
import { FooterEl } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterEl>
      <Logo />
      <NetLink />
      <AddressEl />
      <MailEl />
      <CopyrightEl />
    </FooterEl>
  );
};
