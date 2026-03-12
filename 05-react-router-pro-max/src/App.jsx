import { Route, Routes } from 'react-router'
import './App.css'
import Sobre from './pages/sobre'
import Home from './pages/Home'
import Header from './components/header/Header'
import Rodape from './components/rodape/Rodape'
import Contato from './pages/Contato'
import NaoEncontrado from './pages/NaoEncontrado'

function App() {


  return (
    <>
    <Header/>
      <Routes> {/* Identifica todas as rotas do sistema */}
        <Route path='/' element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/> {/* Uma das rotas do sistema */}
        <Route path='/Contato' element={<Contato/>}/>
        <Route path='/*' element={<NaoEncontrado/>}/>
      </Routes>
      <Rodape link="https://github.com/EnzoNicoletti" escritoLink="EnzoNicoletti"/>
    </>
  )
}

export default App
