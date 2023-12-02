import styled from "@emotion/styled";

export const Button = styled.button`
  border: none;
  border-top: solid 1px var(--accent-color);
  background-color: var(--transparent-color);
  display: inline-flex;
  width: 100%;
  padding: 16px 0;
  justify-content: start;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--cardTitleMd-fontSize);
  font-weight: 400;
  line-height: 1.2;
  text-align: justify;
  letter-spacing: -0.72px;

  transition: all var(--transition-duration) var(--timing-function);

  img {
    width: 16px;
    height: 16px;
  }
`;

export const Pocket = styled.div`
  height: 0;
  overflow: hidden;
  max-height: ${({isOpen})=>isOpen?'1000px':0};
  transition: all var(--transition-duration) var(--timing-function);

  &.fag-open {
    height: auto;
  }
`;

export const Text = styled.p`
  color: var(--primary-color);
  text-align: justify;
  font-family: Fira Sans;
  font-size: var(--cardText-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.56px;
  padding: 0 0 16px 24px;
`;

