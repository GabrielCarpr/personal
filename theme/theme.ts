import { css } from 'styled-components';

export const theme = {
    colors: {
        background: '#0F0F23',
        primary: '#CCD6F6',
        secondary: '#959FBC',
        accent: '#64FFAB'
    },
    type: {
        heading: css`
            font-family: Inter, 'sans-serif';
            font-weight: bold;
        `,
        lead: css`
            font-family: Inter, 'sans-serif';
            font-weight: normal;
        `,
        body: css`
            font-family: Inter, 'sans-serif';
            font-weight: normal;
            line-height: 1.5;
        `,
        accent: css`
            font-family: 'Source Code Pro', monospace;
        `
    },
    effects: {
        glow: css`
            text-shadow: 0px 0px 3px rgba(49, 175, 145, 0.64);
            filter: drop-shadow(0px 0px 3px rgba(49, 175, 145, 0.64));
        `
    },
    padding: {
        outer: "1rem",
        columnMax: "50rem",
        columnWidth: "70%"
    }
}

export type ThemeType = typeof theme;