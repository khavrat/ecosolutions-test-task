import styled from "@emotion/styled";

export const Link = styled.a`
  display: inline-flex;
  gap: 8px;
  color: var(--wight-color);
  font-family: Fira Sans;
  font-size: var(--link-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.96px;
  padding: 4px 0;
  transition: color var(--transition-duration) var(--timing-function);

  &:hover {
    color: var(--accent-color);
  }
`;
