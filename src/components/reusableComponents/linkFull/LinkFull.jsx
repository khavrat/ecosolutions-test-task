import { Link, Dot } from "./LinkFull.styled";
import arrowSm from "../../../images/icons/arrowSm.svg";

export const LinkFull = ({ nameLink, href}) => {
  return (
    <>
      <Link href={href}>
        {nameLink}
        <Dot>
          <img src={arrowSm} alt="arrow" />
        </Dot>
      </Link>
    </>
  );
};
