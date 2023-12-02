import styled from "@emotion/styled";

export const Contacts = styled.div`
  margin: 24px 0;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    flex: 1;
    width: 50%;
  }
`;

export const Name = styled.p`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--text-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.64px;
  margin-bottom: 8px;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Block = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

export const Link = styled.a`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--closeBtn-fontSize);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.8px;
  display: inline-flex;
  gap: 8px;

  transition: all var(--transition-duration) var(--timing-function);

  &:hover {
    svg path {
      stroke: var(--accent-color);
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: var(--link-fontSize);
  }
`;

export const Address = styled.address`
  color: var(--primary-color);
  font-family: Fira Sans;
  font-size: var(--closeBtn-fontSize);
  font-weight: 400;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.8px;
  display: inline-flex;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    font-size: var(--link-fontSize);
  }
`;
