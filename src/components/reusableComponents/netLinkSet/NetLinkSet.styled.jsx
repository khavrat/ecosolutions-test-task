import styled from "@emotion/styled";

export const NetLinkWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const NetLinkFb = styled.a`
  transition: all var(--transition-duration) var(--timing-function);

  &:hover {
    svg path:first-of-type {
      fill: var(--accent-color);
    }
  }
  &:hover {
    svg path:last-of-type {
      stroke: var(--accent-color);
    }
  }
`;

export const NetLinkIn = styled.a`
  transition: all var(--transition-duration) var(--timing-function);

  &:hover {
    svg path {
      stroke: var(--accent-color);
    }
  }
`;
