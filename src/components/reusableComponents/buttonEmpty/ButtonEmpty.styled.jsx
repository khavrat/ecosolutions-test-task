
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export const Dot = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: var(--accent-color);
  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: all var(--transition-duration) var(--timing-function);

  img {
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
  }
`;

export const Button = styled.button`
  border: 1px solid var(--accent-color);
  border-radius: 500px;
  background-color: var(--transparent-color);
  display: inline-flex;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-weight: 400;
  line-height: 1.125;
  letter-spacing: -0.64px;

  transition: all var(--transition-duration) var(--timing-function);

  :hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--accent-color);
  }
`;