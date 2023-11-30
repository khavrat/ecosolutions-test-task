import styled from "@emotion/styled";

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  z-index: 50;
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

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Burger = styled.button`
  border-color: transparent;
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

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;
