import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-flex;
  align-items: end;
  gap: 4px;
  background-color: var(--transparent-color);
  border: transparent;
  color: var(--wight-color);
  font-family: Fira Sans;
  font-size: var(--closeBtn-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  padding: 8px 0;

  transition: color var(--transition-duration) var(--timing-function);

  &:hover,
  :focus {
    color: var(--accent-color);
  }

  &::after {
    content: "";
    height: 1px;
    background-color: var(--wight-color);
    position: absolute;
    top: 56px;
    left: 24px;
    right: 24px;
  }
`;
