import { Button, Dot } from "./LinkFull.styled";
import arrowSm from "../../../images/icons/arrowSm.svg";

export const LinkFull = ({ nameLink, href}) => {
  return (
    <>
      <Button href={href}>
        {nameLink}
        <Dot>
          <img src={arrowSm} alt="arrow" />
        </Dot>
      </Button>
    </>
  );
};
