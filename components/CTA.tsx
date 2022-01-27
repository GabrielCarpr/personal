import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Text } from "./Text";

export const CTA = () => {
  return (
    <Box>
      <Button icon="Mail" href="mailto:me@gabrielcarpreau.com">
        Contact Me
      </Button>
      <Footer>gabrielcarpreau.com</Footer>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  width: 100%;
  position: relative;
`;

const Footer = styled.span`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.4;
  ${({ theme }) => theme.type.accent}
  font-size: 0.64rem;
`;
