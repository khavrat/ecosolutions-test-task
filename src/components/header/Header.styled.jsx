import styled from "@emotion/styled";

export const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: 36px 0;
  background-color: var(--bg-color);

  transition: background-color var(--transition-duration) var(--timing-function);

  &.scrolled {
    background-color: var(--wight-color);
  }

  @media screen and (min-width: 1280px) {
    padding: 24px 0;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 12px;
`;
