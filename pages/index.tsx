import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';
import { Theme } from 'theme';
import Main from 'pages/Home';

const Home: NextPage = () => {
  return (
    <Theme>
      <div>
        <Head>
          <title>Gabriel Carpreau</title>
          <meta name="description" content="Website of Gabriel Carpreau, Software Developer" />
        </Head>

        <Container>
          <Main />
        </Container>
      </div>
    </Theme>
  )
}

const Container = styled.main`
  background: ${props => props.theme.colors.background};
  min-height: 100vh;
`;

export default Home
