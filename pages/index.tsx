import { getProjects } from "lib/api";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Theme } from "theme";
import { ProjectSchema } from "types";
import Main from "views/Home";

interface Props {
  projects: ProjectSchema[];
}

const Home = (props: Props) => {
  const { projects } = props;

  return (
    <Theme>
      <div>
        <Head>
          <title>Gabriel Carpreau</title>
          <meta
            name="description"
            content="Gabriel Carpreau, Software Developer based in Manchester, UK"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="100x100"
            href="/images/favicon.ico"
          />
        </Head>

        <Container>
          <Main projects={projects} />
        </Container>
      </div>
    </Theme>
  );
};

const Container = styled.main`
  background: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;

export default Home;

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: { projects },
  };
};
