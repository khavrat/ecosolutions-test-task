import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop-color);
  z-index: 5;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 36px;
  right: 20px;
  bottom: 36px;
  min-width: 320px;
  min-height: 350px;
  background-color: var(--menu-bg-color);
  border-radius: 25px;
  padding: 16px 24px 24px;
  z-index: 6;
  overflow: hidden;

  @media screen and (max-width: 479px) {
    left: 20px;
  }

  @media screen and (min-width: 480px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    right: 30px;
    width: 320px;
  }

  @media screen and (min-width: 1280px) {
    top: 24px;
    width: 365px;
  }

  @media screen and (min-width: 1440px) {
    right: 100px;
  }
`;

export const Wrap = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
`;
