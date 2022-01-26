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
        body: css`
            font-family: Inter, 'sans-serif';
            font-weight: bold;
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
    }
}