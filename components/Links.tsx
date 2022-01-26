import React from 'react';
import styled from 'styled-components';
import CV from './icons/CV';
import Github from './icons/Github';
import LinkedIn from './icons/LinkedIn';
import Mail from './icons/Mail';

export const Links = () => {
    return <Container>
        {getIcon("gh", "https://github.com/GabrielCarpr")}
        {getIcon("li", "https://www.linkedin.com/in/gabrielcarpreau/")}
        {getIcon("mail", "mailto:me@gabrielcarpreau.com")}
        {getIcon("cv", "/CV.pdf")}
    </Container>;
}

const getIcon = (name: 'gh'|'li'|'mail'|'cv', link: string) => {
    const Icon = {
        gh: Github,
        li: LinkedIn,
        mail: Mail,
        cv: CV
    }[name];

    return <a href={link} target="_blank"><Icon height="1.7em" width="1.4em" /></a>
}

const Container = styled.span`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: ${props => props.theme.padding.outer};
    right: ${props => props.theme.padding.outer};

    @media (min-width: 825px) {
        flex-direction: row;
    }
`;