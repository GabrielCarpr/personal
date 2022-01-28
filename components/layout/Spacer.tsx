import React from "react";
import styled from "styled-components";

export const Spacer = styled.span<{ size?: number }>`
  display: block;
  height: ${(props) => props.size ?? 1}rem;
`;
