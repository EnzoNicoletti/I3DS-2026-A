import { useState } from 'react';
import './App.css'
import Link from './components/Link/Link';
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/Rodape/Rodape';
import SocialLink from './components/SocialLink/SocialLink';
import Switch from './components/Switch/Switch';
function App() {
  const[isLight,setIsLight] = useState(true)

  const troca = () =>{
    setIsLight(!isLight);
  }

  return (
    <div id="App" className={isLight ? "light" : ""}>

       <Perfil fotoPerfil={"https://placehold.co/200"}>Enzo Nicoletti</Perfil>

       <Switch troca={troca} isLight={isLight}/>
       <div id="Link">
       <ul>
       <Link url={""}>Inscreva-se</Link>
       <Link url={""}>Minha Playlist</Link>
       <Link url={""}>Me pague um café!</Link>
       <Link url={""}>Conheça o curso DEV</Link>
       </ul>
       </div>
       <div id="SocialLinks">
        <SocialLink url={"https://github.com/EnzoNicoletti"} icon={"logo-github"}/>
        <SocialLink url={"https://www.youtube.com/channel/UCW6W5loHJa2Ppf8MLH1MBEA"} icon={"logo-youtube"}/>
        <SocialLink url={"https://br.linkedin.com/"} icon={"logo-linkedin"}/>
        <SocialLink url={"https://www.instagram.com/"} icon={"logo-instagram"}/>
       </div>
       <div className="rodape">
        <Rodape>EnzoNicoletti</Rodape>
       </div>
    </div>
  )
}

export default App;
