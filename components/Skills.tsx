import React from "react";
import styled from "styled-components";
import { Column } from "./layout/Column";
import { Padding } from "./layout/Padding";
import { Text } from "./Text";

interface Props {
  data: {
    title: string;
    skills: string[];
  }[];
}

export const Skills = (props: Props) => {
  const content = props.data.map(({ title, skills }) => skill(title, skills));
  return (
    <Padding>
      <Column gap={2}>
        <Text level="h2">Skills & Technologies</Text>
        {content}
      </Column>
    </Padding>
  );
};

const skill = (title: string, skills: string[]) => {
  const content = <Text level="accent">{skills.join(", ")}</Text>;
  return (
    <Skill>
      <Text level="h3">{title}</Text>
      {content}
    </Skill>
  );
};

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
