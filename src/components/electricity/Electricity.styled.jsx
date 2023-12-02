import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 18px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 50px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 60px 0;
  }
`;

export const Title = styled.h2`
  color: var(--primary-color);
  font-family: Oswald;
  font-size: var(--sectionTitle-fontSize);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin: 0 auto;
  width: 290px;

  @media screen and (min-width: 768px) {
    font-size: var(--headTitleSm-fontSize);
    width: 368px;
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--headTitleMd-fontSize);
    width: 500px;
  }
`;

export const Line = styled.h2`
  width: 1px;
  height: 48px;
  background-color: var(--accent-color);
  margin: 24px auto;

  @media screen and (min-width: 768px) {
    height: 87px;
  }

  @media screen and (min-width: 1280px) {
    margin: 16px auto;
  }
`;

export const Span = styled.span`
  color: var(--accent-color);
  font-family: Oswald;
  font-size: var(--headTitleMd-fontSize);
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    font-size: var(--count-fontSize);
    margin-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--countLg-fontSize);
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-family: Oswald;
  font-size: var(--link-fontSize);
  font-style: normal;
  font-weight: 400;
  line-height: 1;

  @media screen and(min-width: 768px) {
    font-size: var(--sectionTitle-fontSize);
    line-height: 1.71;
  }

  @media screen and(min-width: 1280px) {
    font-size: var(--headTitleMd-fontSize);
    line-height: 1;
  }
`;
