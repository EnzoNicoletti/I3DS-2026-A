import React from 'react'
import { Link } from 'react-router'

const Rodape = () => {
  return (
    <footer>
      <div className="rodape">
            &copy; 2026 - EnzoNicoletti - <Link to={"/"}>Home</Link>
        </div>
    </footer>
  )
}

export default Rodape
