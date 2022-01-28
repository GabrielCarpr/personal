import React from "react";
import styled, { css, ThemeProps } from "styled-components";
import { theme as baseTheme } from "theme";

interface Props {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "lead" | "accent";
  color?: Colors;
  children: React.ReactNode;
  id?: string;
}

type Colors = "primary" | "secondary" | "accent";

export const Text = (props: Props) => {
  const { color, level = "body", children, id } = props;

  const Element = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    body: Body,
    lead: Body,
    accent: Accent,
  }[level];

  return (
    <Element id={id} lead={level == "lead"} color={color}>
      {children}
    </Element>
  );
};

const color = (props: ThemeProps<typeof baseTheme> & ColorProps) => css`
  ${props.color &&
  css`
    color: ${props.color == "primary" && props.theme.colors.primary};
    color: ${props.color == "secondary" && props.theme.colors.secondary};
    color: ${props.color == "accent" && props.theme.colors.accent};
  `}
`;

const typeStyles = css`
  & p {
    margin-bottom: 1rem;
  }
  & p:last-child {
    margin-bottom: 0;
  }

  & a {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  & a,
  & strong {
    ${({ theme }) => theme.type.accent};
    color: ${({ theme }) => theme.colors.accent};
    ${({ theme }) => theme.effects.glow}
  }
`;

interface ColorProps {
  color?: Colors;
}

const H1 = styled.h1<ColorProps>`
  font-size: 3.052rem;
  ${(props) => props.theme.type.heading}
  ${color}
    color: ${(props) => props.theme.colors.primary};
`;

const H2 = styled.h2<ColorProps>`
  font-size: 2.441rem;
  ${(props) => props.theme.type.heading}
  color: ${(props) => props.theme.colors.primary};
  ${color}
  ${typeStyles}
`;

const H3 = styled.h3<ColorProps>`
  font-size: 1.953rem;
  ${(props) => props.theme.type.heading}
  color: ${(props) => props.theme.colors.secondary};
  ${color}
  ${typeStyles}
`;

const H4 = styled.h4<ColorProps>`
  font-size: 1.563rem;
  ${(props) => props.theme.type.heading}
  color: ${(props) => props.theme.colors.secondary};
  ${color}
  ${typeStyles}
`;

const H5 = styled.h5<ColorProps>`
  font-size: 1.25rem;
  ${(props) => props.theme.type.heading}
  color: ${(props) => props.theme.colors.secondary};
  ${color}
  ${typeStyles}
`;

const Body = styled.p<ColorProps & { lead?: boolean; margin?: boolean }>`
  ${(props) => props.theme.type.body}
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1rem;

  ${color}
  ${typeStyles}

  ${({ lead }) =>
    lead &&
    css`
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors.primary};
      ${(props) => props.theme.type.lead}
    `}
`;

const Accent = styled.span`
  ${(props) => props.theme.type.accent}
  color: ${(props) => props.theme.colors.accent};
  ${(props) => props.theme.effects.glow}
`;
