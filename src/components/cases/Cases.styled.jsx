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

export const Wrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    border-right: 1px solid var(--accent-color);
  }
`;

export const Title = styled.h2`
  color: var(--primary-color);
  font-family: Oswald;
  font-size: var(--sectionTitle-fontSize);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  width: 264px;

  @media screen and (min-width: 768px) {
    font-size: var(--headTitleSm-fontSize);
    margin-bottom: 38px;
    margin-left: 12px;
  }
  @media screen and (min-width: 1280px) {
    font-size: var(--headTitleMd-fontSize);
    width: 398px;
    margin-bottom: 120px;
    margin-left: 24px;
  }
`;

