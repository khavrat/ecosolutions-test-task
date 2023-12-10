import texts from "../../../data/texts.json";
import { CopyLink } from "./CopyrightEl.styled";

export const CopyrightEl = () => {
  return (
    <CopyLink href="#">
      {texts.contactBlock.copy} &copy; {texts.contactBlock.copyDate}
    </CopyLink>
  );
};
