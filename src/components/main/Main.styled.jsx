import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 222px;
  padding-bottom: 18px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const HeadTitle = styled.h1`
  color: var(--primary-color);
  font-family: Oswald;
  font-size: var(--headTitleSm-fontSize);
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  flex:1;
  width: 50%;
`;
export const Box = styled.div`
  flex: 1;
  width: 50%;
`;
export const Text = styled.p`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.64px;
  margin: 24px 0;
`;
export const AdressWrapper = styled.div`
  margin-top: 24px;
  padding: 24px 0;
  border-top: solid 1px var(--accent-color);
`;

export const Address = styled.address`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.64px;
  text-align: center;
`;
export const Mail = styled.a`
  display: block;
  margin: 0 auto;
  width: fit-content;
  margin-top: 8px;
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.64px;
  text-align: center;
`;
