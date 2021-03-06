import { CTA } from "components/CTA";
import { Header } from "components/Header";
import { Intro } from "components/Intro";
import { Spacer } from "components/layout/Spacer";
import { Projects } from "components/Projects";
import { Skills } from "components/Skills";
import React from "react";
import { ProjectSchema } from "types";

interface Props {
  projects: ProjectSchema[];
}

const home = (props: Props) => {
  return (
    <>
      <Header />
      <Spacer size={6} />
      <Intro />
      <Spacer size={5} />
      <Projects projects={props.projects} />
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
              "Kubernetes (at hobby level)",
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
