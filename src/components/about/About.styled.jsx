import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 18px 0;

  @media screen and (min-width: 768px) {
    padding: 50px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 60px 0;
  }
`;

export const ContentWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 122px;
  }
`;

export const TitleWrap = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

export const Title = styled.h2`
  color: var(--primary-color);
  font-family: Oswald;
  font-size: var(--sectionTitle-fontSize);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: var(--headTitleSm-fontSize);
    width: 275px;
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--headTitleMd-fontSize);
    width: 365px;
  }
`;

export const TextWrap = styled.div`
  @media screen and (max-width: 767px) {
    margin: 24px 0 36px 0;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-left: 11px;
    border-left: solid 1px var(--accent-color);
  }

  @media screen and (min-width: 1280px) {
    padding-left: 161px;
  }
`;

export const Text = styled.p`
  color: var(--primary-color);
  text-align: justify;
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.64px;
`;
