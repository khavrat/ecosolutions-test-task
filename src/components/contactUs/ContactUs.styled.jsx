import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 18px 0 36px;

  @media screen and (min-width: 768px) {
    padding: 50px 0 100px;
  }

  @media screen and (min-width: 1280px) {
    padding: 60px 0 120px;
  }
`;

export const Title = styled.h2`
  color: var(--primary-color);
  font-family: Oswald;
  font-size: var(--sectionTitle-fontSize);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: var(--headTitleSm-fontSize);
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--headTitleMd-fontSize);
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;
