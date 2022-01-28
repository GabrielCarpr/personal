import React from "react";
import { ProjectSchema } from "types";
import { Column } from "./layout/Column";
import { Padding } from "./layout/Padding";
import { Spacer } from "./layout/Spacer";
import { Project } from "./Project";
import { Text } from "./Text";

interface Props {
  projects: ProjectSchema[];
}

export const Projects = (props: Props) => {
  const { projects } = props;

  const content = projects.map((proj) => (
    <Project
      name={proj.name}
      image={proj.image ?? undefined}
      github={proj.github ?? undefined}
      lead={proj.lead}
      key={proj.name}
    >
      {proj.content}
    </Project>
  ));

  return (
    <Column>
      <Padding>
        <Text level="h2">Projects</Text>
        <Spacer />
      </Padding>
      {content}
    </Column>
  );
};
