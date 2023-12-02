import arrowSm from "../../../images/icons/arrowSm.svg";
import { Wrapper,Button, Dot  } from "./ButtonEmpty.styled";

export const ButtonEmpty = ({ nameButton, type }) => {
  return (
    <Wrapper>
      <Button type={type}>
        {nameButton}
        <Dot>
          <img src={arrowSm} alt="arrow" />
        </Dot>
      </Button>
    </Wrapper>
  );
};