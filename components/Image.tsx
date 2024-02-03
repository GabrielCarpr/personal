import React from "react";
import BaseNextImage from "next/image";
import Forum from "public/images/SupportForum.jpg";
import Leadflo from "public/images/LeadfloScreenshot.jpg";
import RotaCloud from "public/images/rotacloud.png";
import styled, { css, ThemeContext } from "styled-components";
import { theme } from "theme";

const images = {
  forum: Forum,
  leadflo: Leadflo,
  rotacloud: RotaCloud,
};

export type ImageNames = keyof typeof images;

interface Props {
  image: ImageNames;
  priority?: boolean;
  outlined?: boolean;
}

export const Image = (props: Props) => {
  const { image, outlined } = props;
  return (
    <Outline outlined={outlined}>
    <NextImage
      alt=""
      src={images[image]}
      quality={90}
      placeholder="blur"
    />
    </Outline>
  );
};

const NextImage = styled(BaseNextImage)`
  @media (min-width: 850px) {
    border-radius: 5px;
  }
`

const Outline = styled.div<{ outlined?: boolean }>`
  @media (min-width: 850px) {
    // Outline is tablet and desktop only
    ${({ outlined }) =>
      outlined &&
      css`
        padding: 0.5rem !important;
        border: 1px solid ${({ theme }) => theme.colors.accent}!important;
        display: inline-block;
      `}
  }
`;
