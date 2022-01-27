import React from "react";
import styled from "styled-components";
import * as Feather from "react-feather";

interface Props {
  href?: string;
  icon?: keyof typeof Feather;
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  const { href, children, icon: iconName } = props;
  const Icon = iconName ? Feather[iconName] : null;
  return (
    <Wrapper href={href} target="_blank">
      {Icon && <Icon />}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.a`
  padding: 1rem;
  outline: none;
  text-decoration: none;
  color: ${(props) => props.theme.colors.accent};
  ${(props) => props.theme.effects.glow}
  border: 1px solid ${(props) => props.theme.colors.accent};
  ${(props) => props.theme.type.accent}
  font-size: 1rem;
  display: inline-flex;
  position: relative;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    &::before {
      background-color: ${(props) => props.theme.colors.accent};
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      z-index: -1;
      position: absolute;
    }
  }
`;
