import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  align-items: end;
  gap: 4px;
  width: 100%;
  background-color: var(--transparent-color);
  border: transparent;
  border-bottom: solid 1px var(--wight-color);
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
  }
`;
