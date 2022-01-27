import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Logo = () => (
  <Link passHref href="/">
    <Container>gabrielcarpreau</Container>
  </Link>
);

const Container = styled.span`
  color: ${(props) => props.theme.colors.accent};
  ${(props) => props.theme.type.accent};
  font-size: 1.25rem;
  ${(props) => props.theme.effects.glow};
  cursor: pointer;
`;
