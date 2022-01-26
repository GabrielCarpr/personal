import { Header } from 'components/Header';
import { Intro } from 'components/Intro';
import React from 'react';
import styled from 'styled-components';

const home = () => {
    return <>
        <Header />
        <Spacer size={3} />
        <Intro />
    </>;
}

export default home;

const Spacer = styled.span<{ size?: number }>`
    display: block;
    height: ${props => props.size ?? 1}rem;
`;