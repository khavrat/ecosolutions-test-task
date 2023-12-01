import arrowSm from "../../../images/icons/arrowSm.svg";
import { Wrapper,Button, Dot  } from "./ButtonEmpty.styled";

export const ButtonEmpty = ({ nameButton }) => {
  return (
    <Wrapper>
      <Button>
        {nameButton}
        <Dot>
          <img src={arrowSm} alt="arrow" />
        </Dot>
      </Button>
    </Wrapper>
  );
};