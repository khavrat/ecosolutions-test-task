import styled from "@emotion/styled";

export const Card = styled.div`
  background-color: var(--card-color);
  padding: 12px;
  min-height: 197px;

  @media screen and (min-width: 1280px) {
    padding: 48px 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 33px;
  border-bottom: solid 1px var(--accent-color);

  @media screen and (min-width: 768px) {
    padding-bottom: 51px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 94px;
  }
`;

export const Image = styled.img`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h3`
  color: var(--primary-color);
  font-family: Oswald;
  font-size: var(--text-fontSize);
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: var(--cardTitleMd-fontSize);
  }
  @media screen and (min-width: 1280px) {
    font-size: var(--cardTitleLg-fontSize);
  }
`;

export const Text = styled.p`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--cardText-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.56px;
  padding-top: 12px;
  text-align: justify;

  @media screen and (min-width: 1280px) {
    font-size: var(--text-fontSize);
  }
`;
