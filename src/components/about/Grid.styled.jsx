import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-gap: 48px;
  }
`;

export const ImageCard = styled.div`
  min-height: 197px;
  grid-column: span 2;
  background-color: var(--card-color);
`;



