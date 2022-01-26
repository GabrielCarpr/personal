import React from 'react';
import styled from 'styled-components';
import { Text } from './Text';

export const Intro = () => {
    return <Column>
        <Text level="accent">Hi I'm</Text>
        <Text level="h1">Gabriel Carpreau</Text>
        <Text level="lead" color="secondary">Software Developer</Text>
        <Text>
            I’m a full-stack developer with a special
            interest in backend and infrastructure,
            based in Manchester, UK. I’m currently
            building the best dental practice CRM in
            the world, Leadflo.
        </Text>
    </Column>
}

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: ${props => props.theme.padding.outer};
`;

