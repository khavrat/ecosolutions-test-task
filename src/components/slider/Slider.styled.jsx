import styled from "@emotion/styled";
import arrow from "../../images/icons/arrowRight.png";
import arrowLight from "../../images/icons/arrowLight.png";

export const Card = styled.div`
  background-color: var(--card-color);
  overflow: hidden;
`;

export const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 12px 21px;
  border-bottom: 1px solid var(--accent-color);

  & > button {
    transform: rotate(45deg);
    width: 60px;
    height: 60px;

    & > svg {
      width: 28px;
      height: 28px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 24px 12px 16px;
  }
  @media screen and (min-width: 1280px) {
    padding: 36px 48px;
  }
`;

export const Location = styled.p`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--cardTitleMd-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.72px;
  width: 175px;

  @media screen and (min-width: 768px) {
    font-size: var(--closeBtn-fontSize);
    letter-spacing: -0.8px;
    width: 194px;
  }
  @media screen and (min-width: 1280px) {
    font-size: var(--link-fontSize);
    letter-spacing: -0.96px;
    width: 357px;
  }
`;

export const Title = styled.h3`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--cardTitleMd-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.72px;
  width: 175px;

  @media screen and (min-width: 768px) {
    font-size: var(--closeBtn-fontSize);
    letter-spacing: -0.8px;
    width: 194px;
  }
  @media screen and (min-width: 1280px) {
    font-size: var(--link-fontSize);
    letter-spacing: -0.96px;
    width: 357px;
  }
`;

export const ArrowsContainer = styled.div`
  &.container {
    position: relative;
    width: 144px;
    background-color: red;
  }
`;

export const CustomPrevArrow = styled.button`
  display: inline-block;
  background-color: var(--bg-color);
  width: 66px;
  height: 66px;
  border: none;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: -62px;
  right: 80px;
  left: auto;

  transition: all var(--transition-duration) var(--timing-function);

  &:hover,
  :focus {
    border: 1px solid var(--accent-color);
    background-image: url(${arrowLight});
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media screen and (min-width: 768px) {
    right: 92px;
  }

  @media screen and (min-width: 1280px) {
    width: 84px;
    height: 84px;
    top: -160px;
    right: 134px;
  }
`;

export const CustomNextArrow = styled.button`
  display: inline-block;
  background-color: var(--bg-color);
  width: 66px;
  height: 66px;
  border: none;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center center;
  transform: rotate(180deg);
  position: absolute;
  top: -94px;
  right: 0;

  transition: all var(--transition-duration) var(--timing-function);

  &:hover,
  :focus {
    border: 1px solid var(--accent-color);
    background-image: url(${arrowLight});
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media screen and (min-width: 768px) {
    right: 12px;
  }
  @media screen and (min-width: 1280px) {
    width: 84px;
    height: 84px;
    top: -200px;
    right: 24px;
  }
`;
export const WrapperBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;

  @media screen and (min-width: 1280px) {
    padding: 24px 48px 36px;
  }
`;

export const Text = styled.p`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--errorText-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) {
    font-size: var(--cardText-fontSize);
  }
  @media screen and (min-width: 1280px) {
    font-size: var(--text-fontSize);
  }
`;

// counter
export const CounterContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin: 63px 0 19px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 280px;
  }

  @media screen and (min-width: 1280px) {
    top: 60px;
    right: 380px;
  }

  @media screen and (min-width: 1440px) {
    top: 60px;
    right: 450px;
  }
`;

export const Counter = styled.div`
  color: var(--backdrop-color);
  font-family: Fira Sans;
  font-size: var(--sectionTitle-fontSize);
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -1.12px;
`;

export const ActiveCount = styled.span`
  display: inline-block;
  width: 30px;
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--sectionTitle-fontSize);
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -1.12px;
`;
