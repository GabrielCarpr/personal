import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { Hidden } from "./Hidden";
import { Image, ImageNames } from "./Image";
import { Text } from "./Text";
import ReactMarkdown from "react-markdown";

interface Props {
  name: string;
  lead: string;
  image?: ImageNames;
  github?: string;
  children: string; // Markdown as a string
  priority?: boolean;
}

export const Project = (props: Props) => {
  const { name, image, github, lead, children, priority } = props;

  return (
    <Margin hasImage={!!image}>
      <Container>
        <Text level="h3" id={name}>
          {name}
        </Text>
      </Container>
      <Hidden above={850}>
        {image && <Image image={image} outlined priority={priority} />}
      </Hidden>
      <Container>
        <Row hasImage={!!image}>
          <Text level="lead">
            <ReactMarkdown linkTarget="_blank">{lead}</ReactMarkdown>
          </Text>
          <Hidden below={850}>
            {image && <Image image={image} outlined priority={priority} />}
          </Hidden>
        </Row>
        <Text>
          <ReactMarkdown linkTarget="_blank">{children}</ReactMarkdown>
        </Text>

        {github && (
          <Button href={github} icon="GitHub">
            View on GitHub
          </Button>
        )}
      </Container>
    </Margin>
  );
};

const Margin = styled.div<{ hasImage?: boolean }>`
  margin-bottom: 2rem;

  @media (min-width: 850px) {
    ${({ hasImage }) =>
      !hasImage &&
      css`
        width: 70%;
      `}
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Container = styled.div`
  padding: ${(props) => props.theme.padding.outer};
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 850px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Row = styled.div<{ hasImage?: boolean }>`
  display: block;

  @media (min-width: 850px) {
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr;

    ${({ hasImage }) =>
      hasImage &&
      css`
        grid-template-columns: 1fr 2fr;
      `}
  }
`;
