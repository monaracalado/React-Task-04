import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {

  const logoReact = './react.svg'
  return (
    <>
  <BrowserRouter>
    <Header src={logoReact}>

    <Menu/>
    </Header>
    <Routes>
      
    </Routes>
    <Footer github={'https://github.com/monaracalado'} linkedin={'https://www.linkedin.com/in/monaracalado/'}/>
  </BrowserRouter>
    </>
  );
}

export default App;
