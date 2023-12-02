import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
`;

export const NetLink = styled.a`
  display: inline-flex;
  padding: 6px;

  transition: all var(--transition-duration) var(--timing-function);

  &:hover {
    svg path:first-of-type {
      fill: var(--accent-color);
      stroke: var(--accent-color);
    }
  }

  &:hover {
    svg path:last-of-type {
      stroke: var(--accent-color);
    }
  }
`;

export const NetLinkIn = styled.a`
  display: inline-flex;
  padding: 6px;

  transition: all var(--transition-duration) var(--timing-function);

  &:hover {
    svg path {
      stroke: var(--accent-color);
    }
  }
`;
