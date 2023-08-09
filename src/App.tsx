import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Imutabilidade from './components/Pages/Imutabilidade';
import HookForm from './components/Pages/HookForm';
import FormularioSimples from './components/Pages/FomularioSimples';
import ValidacaoYup from './components/Pages/ValidaçãoYup';
import NotFound from './components/Pages/NotFound';

function App() {

  const logoReact = './react.svg'
  return (
    <>
  <BrowserRouter>
    <Header src={logoReact}>

    <Menu/>
    </Header>
    <Routes>
    <Route path='/' element={<Imutabilidade />} />
    <Route path='/FormularioSimples' element={<FormularioSimples />} />
    <Route path='/HookForm' element={<HookForm />} />
    <Route path='/ValidacaoYup' element={<ValidacaoYup />} />
    <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer github={'https://github.com/monaracalado'} linkedin={'https://www.linkedin.com/in/monaracalado/'}/>
  </BrowserRouter>
    </>
  );
}

export default App;
