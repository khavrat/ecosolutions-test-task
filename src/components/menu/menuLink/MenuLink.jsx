import { Link } from "./MenuLink.styled";
import { ArrowSvg } from "../../reusableComponents/arrowSvg";

export const MenuLink = ({onClose, href, children}) => {
  return (
    <Link href={href} onClick={onClose}>
      {children}
      <ArrowSvg />
    </Link>
  );
};
