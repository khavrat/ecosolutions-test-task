import styled from "@emotion/styled";

export const Button = styled.button`
  border: none;
  border-radius: 50%;
  background-color: var(--accent-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  transition: all var(--transition-duration) var(--timing-function);

  &:hover {
    background-color: var(--primary-color);

    svg path {
      stroke: var(--accent-color);
    }
  }
`;
