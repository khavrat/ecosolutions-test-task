import texts from "../../../data/texts.json";
import { Mail } from "./MailEl.styled";

export const MailEl = () => {
  return (
    <Mail href="mailto:office@ecosolution.com">{texts.contactBlock.email}</Mail>
  );
};
