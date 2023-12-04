import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 18px 0;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 50px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 60px 0;
  }
`;

export const OrderWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
  }
`;
export const TitleWrap = styled.div`
  @media screen and (min-width: 768px) {
    order: 2;
    flex: 1;
    width: 50%;
  }
`;

export const Title = styled.h2`
  color: var(--primary-color);
  font-family: Oswald;
  font-size: var(--sectionTitle-fontSize);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;
  width: 215px;

  @media screen and (min-width: 768px) {
    width: 280px;
    font-size: var(--headTitleSm-fontSize);
  }
  @media screen and (min-width: 1280px) {
    width: 360px;
    margin-left: 137px;
    font-size: var(--headTitleMd-fontSize);
  }
`;
export const FaqListWrap = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
    width: 50%;
  }
`;

export const Wrap = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 16px;
    right: 70px;
  }
  @media screen and (min-width: 1280px) {
    right: 100px;
  }

  @media screen and (min-width: 1440px) {
    right: 170px;
  }
`;

export const Text = styled.p`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--cardTitleMd-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.72px;
  margin: 36px 0 12px 0;

  @media screen and (min-width: 1280px) {
    font-size: var(--link-fontSize);
    letter-spacing: -0.96px;
  }
`;
