import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Theme } from "theme";
import Main from "views/Home";

const Home: NextPage = () => {
  return (
    <Theme>
      <div>
        <Head>
          <title>Gabriel Carpreau</title>
          <meta
            name="description"
            content="Gabriel Carpreau, Software Developer based in Manchester, UK"
          />
        </Head>

        <Container>
          <Main />
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
