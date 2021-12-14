import logo from './logo.svg';
import './App.css';
import Home from './Home';
import styled from "styled-components"

function App() {
  return (
    <AppContainer>
          <Home />
    </AppContainer>
  );
}

const AppContainer = styled.h1`
background: rgb(36,10,0);
background: linear-gradient(90deg, rgba(36,10,0,0.7103448275862069) 1%, rgba(255,179,0,0.38620689655172413) 35%, rgba(41,121,9,0.5793103448275863) 93%);
min-height: 100vh;
display: flex;
justify-content: center;
align-items: top;
text-align: center;
padding: 5vh;
`

export default App;
