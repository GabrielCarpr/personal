import React from 'react';
import styled from 'styled-components';

export const Logo = () => <Container>gabrielcarpreau</Container>

const Container = styled.span`
    color: ${props => props.theme.colors.accent};
    ${props => props.theme.type.accent};
    font-size: 1.25rem;
    ${props => props.theme.effects.glow};
`;