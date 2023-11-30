import { Button, Dot } from "./ButtonFull.styled";
import arrowSm from "../../../images/icons/arrowSm.svg"

export const ButtonFull = ({ nameButton }) => {
  return (
    <>
      <Button>
        {nameButton}
        <Dot>
          <img src={arrowSm} alt="arrow" />
        </Dot>
      </Button>
    </>
  );

};
