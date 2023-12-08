import styled from "@emotion/styled";

export const Dot = styled.div`
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: var(--primary-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: all var(--transition-duration) var(--timing-function);
`;

export const Link = styled.a`
  border: none;
  border-radius: 500px;
  background-color: var(--accent-color);
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.64px;

  transition: all var(--transition-duration) var(--timing-function);

  :hover {
    background-color: var(--primary-color);
    color: var(--accent-color);
  }

  &:hover > * {
    background-color: var(--accent-color);
  }
`;


