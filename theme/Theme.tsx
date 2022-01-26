import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

interface Props {
    children: React.ReactNode;
}

export const Theme = (props: Props) => {
    return <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
}