import styled from 'styled-components';

//Components
import Content from './components/Content';
import Feature from './components/Feature';
import Header from './components/Header';
import SignUp from './components/SignUp';
import TopBar from './components/TopBar';

const AppDiv = styled.div`
  text-align: center;
`;

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* TABLET */
  @media (min-width: 768px) {
    /* flex-direction: row; */
  }
  /* DESKTOP */
  @media (min-width: 1000px) {
    /* flex-direction: row-reverse; */
  }
`;

function App() {
  return (
    <AppDiv>
      <TopBar />
      <Header />
      <MainDiv>
        <Content />
        <SignUp />
        <Feature yellow />
        <Feature tomato />
        <Feature purple />
      </MainDiv>
    </AppDiv>
  );
}

export default App;
