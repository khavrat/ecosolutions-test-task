import styled from "@emotion/styled";

export const Mail = styled.a`
  display: block;
  margin: 0 auto;
  width: fit-content;
  margin-top: 8px;
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.64px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
