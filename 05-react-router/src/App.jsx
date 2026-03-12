import { Route, Routes } from 'react-router'
import './App.css'
import Sobre from './pages/sobre'
import Home from './pages/Home'
import Header from './components/header/Header'

function App() {


  return (
    <>
    <Header/>
      <Routes> {/* Identifica todas as rotas do sistema */}
        <Route path='/' element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/> {/* Uma das rotas do sistema */}
      </Routes>
    </>
  )
}

export default App
