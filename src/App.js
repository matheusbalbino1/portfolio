import { createGlobalStyle } from 'styled-components';
import Header from "./Componentes/Header/Header.jsx"
import Apresentacao from './Componentes/Apresentacao/Apresentacao';
import Conhecimentos from './Componentes/Conhecimentos/Conhecimentos';
import Projetos from './Componentes/Projetos/Projetos';
import Footer from './Componentes/Footer/Footer';
function App() {

  const GlobalStyle = createGlobalStyle`
    html{
      scroll-behavior: smooth;
    }
    * {
      margin:0;
      padding:0;
      box-sizing: border-box;
      font-family: "Inter",sans-serif;
     }
  `

  return (
    <>
      <GlobalStyle />
      <Header />
      <Apresentacao />
      <Conhecimentos />
      <Projetos />
      <Footer />
    </>
  );
}

export default App;
