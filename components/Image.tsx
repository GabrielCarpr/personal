import React from "react";
import BaseNextImage from "next/image";
import Forum from "public/images/SupportForum.jpg";
import Leadflo from "public/images/LeadfloScreenshot.jpg";
import styled, { css, ThemeContext } from "styled-components";
import { theme } from "theme";

const images = {
  forum: Forum,
  leadflo: Leadflo,
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
    <NextImage
      alt=""
      src={images[image]}
      outlined={outlined}
      quality={90}
      placeholder="blur"
    />
  );
};

const NextImage = styled(BaseNextImage)<{ outlined?: boolean }>`
  @media (min-width: 850px) {
    // Outline is tablet and desktop only
    ${({ outlined }) =>
      outlined &&
      css`
        padding: 0.5rem !important;
        border: 1px solid ${({ theme }) => theme.colors.accent}!important;
      `}
  }
`;
