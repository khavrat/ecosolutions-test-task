import styled from "@emotion/styled";

export const FooterEl = styled.footer`
  text-align: center;
  padding: 24px 0;
  border-top: solid 1px var(--accent-color);
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;

    > :last-child {
      width: 100%;
      margin-top: 18px;
      justify-content: center;
      align-self: center;
    }
  }

  @media screen and (min-width: 768px) {
    & > button {
      order: 3;
      margin-left: 180px;
    }
  }
`;

export const AddressWrap = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
