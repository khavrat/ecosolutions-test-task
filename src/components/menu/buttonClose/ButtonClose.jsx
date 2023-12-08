import { Button } from "./ButtonClose.styled";

export const ButtonClose = ({type, onClose}) => {
    return (
      <Button type={type} onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M5.83331 5.83325L14.1666 14.1666M5.83331 14.1666L14.1666 5.83325"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        close
      </Button>
    );
}