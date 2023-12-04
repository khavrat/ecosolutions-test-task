import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 222px;
  padding-bottom: 18px;

  @media screen and (min-width: 768px) {
    padding-top: 246px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 264px;
    padding-bottom: 60px;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
  }
`;
export const TitleWrap = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
    width: 50%;
  }
`;
export const HeadTitle = styled.h1`
  color: var(--primary-color);
  font-family: Oswald;
  font-size: var(--headTitleSm-fontSize);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  width: 320px;

  @media screen and (min-width: 768px) {
    font-size: var(--headTitleMd-fontSize);
    padding-right: 100px;
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--headTitleLg-fontSize);
    padding-right: 0;
    width: 485px;
  }
`;
export const Box = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex: 1;
    width: 50%;
  }

  @media screen and (min-width: 1280px) {
    width: 460px;
  }
`;

export const Text = styled.p`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.64px;
  margin: 24px 0;

  @media screen and (min-width: 768px) {
    margin: 0 0 43px 0;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 20px 0;
  }
`;

export const AdressWrap = styled.div`
  margin-top: 24px;
  padding: 24px 0 36px 0;
  border-top: solid 1px var(--accent-color);

  @media screen and (min-width: 768px) {
    margin-top: 26px;
    padding: 16px 0 40px 0;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    padding: 12px 0 36px 0;
    display: flex;
    justify-content: space-between;
  }
`;
export const AdressElWrap = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex: 1;
    width: 50%;
  }
`;

export const CopyWrap = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: space-between;
    flex: 1;
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    width: 460px;
    justify-content: space-between;
  }
`;
