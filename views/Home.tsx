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
      <Spacer size={6} mobileSize={3} />
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
            title: "Frameworks/Libraries/Protocols",
            skills: [
              "NestJS",
              "NodeJS",
              "React",
              "Laravel",
              "Redux",
              "Styled Components",
              "FastAPI",
              "Flask",
              "REST",
              "GraphQL"
            ],
          },
          {
            title: "Databases",
            skills: ["PostgreSQL", "MySQL", "Redis", "DynamoDB"],
          },
          {
            title: "Infrastructure",
            skills: [
              "CircleCI",
              "GitHub Actions",
              "Docker",
              "Terraform",
              "Ansible",
              "Kubernetes",
              "AWS: EventBridge",
              "EC2",
              "ECS",
              "EKS",
              "S3",
              "DynamoDB",
              "RDS",
              "ElastiCache",
              "CloudWatch",
              "IAM",
              "Redshift",
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
              "Microservices"
            ],
          },
        ]}
      />
      <CTA />
    </>
  );
};

export default home;
