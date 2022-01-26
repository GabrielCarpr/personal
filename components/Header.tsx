import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';

export const Header = () => {
    return <Container><Logo /></Container>;
}

const Container = styled.div`
    display: flex;
    flex-direction: row; 
`;
