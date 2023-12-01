import styled from "@emotion/styled";

export const Content = styled.div`
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 360px) and (max-width: 379px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (min-width: 380px) {
    width: 380px;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;
