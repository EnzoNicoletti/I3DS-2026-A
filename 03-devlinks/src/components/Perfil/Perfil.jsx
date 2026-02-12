import React from 'react'

const Perfil = ({children, fotoPerfil}) => {
  return (
       <div className="perfil">
       <img src={fotoPerfil} alt="perfil" />
       <p>{children}</p>
       </div>
  )
}

export default Perfil
