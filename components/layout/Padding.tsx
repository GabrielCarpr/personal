import styled from "styled-components";

interface Props {}

export const Padding = styled.div<Props>`
  padding: 0 ${(props) => props.theme.padding.outer};

  @media (min-width: 850px) {
    padding: 0;
  }
`;
