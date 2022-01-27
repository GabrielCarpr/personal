import React from "react";
import styled, { css } from "styled-components";

interface Props {
  above?: number;
  below?: number;
}

export const Hidden = styled.div<Props>`
  ${({ above }) =>
    above &&
    css`
      @media (min-width: ${above}px) {
        display: none;
      }
    `}

  ${({ below }) =>
    below &&
    css`
      @media (max-width: ${below}px) {
        display: none;
      }
    `}
`;
