import React from 'react';
import styled from 'styled-components';
import { Links } from './Links';
import { Logo } from './Logo';

export const Header = () => {
    return <Container><Logo /><Links /></Container>;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${props => props.theme.padding.outer};
    justify-content: space-between;
`;
