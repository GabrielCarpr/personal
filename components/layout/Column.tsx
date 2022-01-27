import styled, { css } from "styled-components";

export const Column = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  margin: 0 0;

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}rem;
    `}

  @media (min-width: 850px) {
    margin: 0 auto;
    width: 75%;
    max-width: ${(props) => props.theme.padding.columnMax};
  }
`;
