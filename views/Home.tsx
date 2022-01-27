import { CTA } from "components/CTA";
import { Header } from "components/Header";
import { Intro } from "components/Intro";
import { Projects } from "components/Projects";
import { Skills } from "components/Skills";
import React from "react";
import styled from "styled-components";

const home = () => {
  return (
    <>
      <Header />
      <Spacer size={6} />
      <Intro />
      <Spacer size={5} />
      <Projects />
      <Spacer size={5} />
      <Skills
        data={[
          {
            title: "Languages",
            skills: [
              "Go",
              "Typescript",
              "PHP",
              "Python",
              "HTML/JSX",
              "CSS",
              "SQL",
            ],
          },
          {
            title: "Frameworks/Libraries",
            skills: [
              "React",
              "Laravel",
              "Redux",
              "Styled Components",
              "FastAPI",
              "Flask",
            ],
          },
          {
            title: "Databases",
            skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
          },
          {
            title: "Infrastructure",
            skills: [
              "CircleCI",
              "GitlabCI",
              "Docker",
              "Terraform",
              "Ansible",
              "ECS",
              "Kubernetes",
            ],
          },
          {
            title: "Skills/Other",
            skills: [
              "Linux",
              "Git",
              "Domain-Driven Design",
              "CQRS",
              "SOLID Principles",
              "Test-Driven Development",
              "Agile",
              "UX & UI Design (somewhat)",
              "Figma",
            ],
          },
        ]}
      />
      <CTA />
    </>
  );
};

export default home;

const Spacer = styled.span<{ size?: number }>`
  display: block;
  height: ${(props) => props.size ?? 1}rem;
`;
