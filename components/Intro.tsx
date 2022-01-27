import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Column } from "./layout/Column";
import { Text } from "./Text";

export const Intro = () => {
  return (
    <Column>
      <Container>
        <Text level="accent">Hi I&apos;m</Text>
        <Text level="h1">Gabriel Carpreau</Text>
        <Text level="lead" color="secondary">
          Software Developer
        </Text>
        <Text>
          I&apos;m a full-stack developer with a special interest in product,
          backend and infrastructure based in Manchester, UK. I&apos;m currently
          building the best dental practice CRM in the world, Leadflo.
        </Text>
        <Button href="mailto:me@gabrielcarpreau.com">Contact Me</Button>
      </Container>
    </Column>
  );
};

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  padding: ${(props) => props.theme.padding.outer};

  @media (min-width: 850px) {
    padding: 0;
    width: 60%;
  }
`;
