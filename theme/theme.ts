import { css } from "styled-components";
import { Theme } from "./Theme";

export const theme = {
  colors: {
    background: "#0F0F23",
    primary: "#CCD6F6",
    secondary: "#959FBC",
    accent: "#64FFAB",
  },
  type: {
    heading: `
            font-family: Inter, 'sans-serif';
            font-weight: bold;
        `,
    lead: `
            font-family: Inter, 'sans-serif';
            font-weight: 500;
        `,
    body: `
            font-family: Inter, 'sans-serif';
            font-weight: normal;
            line-height: 1.5em;
        `,
    accent: `
            font-family: 'Source Code Pro', monospace;
            line-height: 1.5em;
        `,
  },
  effects: {
    glow: `
            text-shadow: 0px 0px 3px rgba(49, 175, 145, 0.64);
            filter: drop-shadow(0px 0px 3px rgba(49, 175, 145, 0.64));
        `,
  },
  padding: {
    outer: "1rem",
    columnMax: "60rem",
    columnWidth: "75%",
  },
};

export type ThemeType = typeof Theme;
