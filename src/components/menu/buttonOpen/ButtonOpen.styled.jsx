import styled from "@emotion/styled";

export const Burger = styled.button`
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: var(--burger-bg-color);
  display: inline-flex;
  padding: 12px;
  justify-content: center;
  align-items: center;

  transition: background-color var(--transition-duration) var(--timing-function);

  &:focus,
  :hover {
    background-color: var(--accent-color);
  }
`;
