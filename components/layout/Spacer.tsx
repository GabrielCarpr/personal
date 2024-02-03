import React from "react";
import styled from "styled-components";

export const Spacer = styled.span<{ size?: number, mobileSize?: number; }>`
  display: block;
  height: ${(props) => props.size ?? 1}rem;

  @media(max-width:850px) {
    height: ${(props) => props.mobileSize ?? props.size ?? 1}rem;
  }
`;
