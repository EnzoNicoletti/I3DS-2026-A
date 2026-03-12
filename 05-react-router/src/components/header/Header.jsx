import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <nav className='navbar'>
        <div className='container'>
        <Link to={"/"}>Home</Link>
        <Link to={"/Sobre"}>Sobre</Link>
        <Link to={"/Contato"}>Contato</Link>
        <Link to={"/NaoEncontrado"}>PIX Grátis 🤑</Link>
        </div>
    </nav>
  )
}

export default Header
