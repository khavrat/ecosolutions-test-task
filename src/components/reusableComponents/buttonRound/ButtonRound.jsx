import { Button } from "./ButtonRound.styled";

export const ButtonRound = ({ type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M3.95312 6.38L7.99979 2.33334L12.0465 6.38"
          stroke="#173D33"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13.6666L8 2.44663"
          stroke="#173D33"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};
