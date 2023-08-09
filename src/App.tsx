import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Imutabilidade from './components/Pages/Imutabilidade';
import HookForm from './components/Pages/HookForm';

function App() {

  const logoReact = './react.svg'
  return (
    <>
  <BrowserRouter>
    <Header src={logoReact}>

    <Menu/>
    </Header>
    <Routes>
    <Route path='/Imutabilidade' element={<Imutabilidade />} />
    <Route path='/HookForm' element={<HookForm />} />
    </Routes>
    <Footer github={'https://github.com/monaracalado'} linkedin={'https://www.linkedin.com/in/monaracalado/'}/>
  </BrowserRouter>
    </>
  );
}

export default App;
