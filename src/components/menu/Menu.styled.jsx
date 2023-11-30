import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop-color);
  z-index: 5;
`;

export const Content = styled.div`
  position: fixed;
  top: 36px;
  right: 20px;
  width: 320px;
  background-color: var(--menu-bg-color);
  border-radius: 25px;
  padding: 16px 24px 24px;
  z-index: 6;

  @media screen and (min-width: 1280px) {
    top: 30px;
    width: 365px;
  }
`;

export const CloseButton = styled.button`
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

export const MenuLinkWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 395px;
`;

export const MenuLink = styled.a`
  display: flex;
  gap: 8px;
  width: 100%;
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


