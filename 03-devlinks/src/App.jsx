import './App.css'
import Link from './components/Link/Link';
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/Rodape/Rodape';
import SocialLink from './components/SocialLink/SocialLink';
function App() {
  return (
    <div id="App">

       <Perfil fotoPerfil={"https://placehold.co/200"}>Enzo Nicoletti</Perfil>
       <Perfil fotoPerfil={"https://placehold.co/100"}>Kyderom Goodman</Perfil>

       <div className="switch">
        Botão Switch
       </div>
       <div id="Link">
       <ul>
       <Link url={""}>Inscreva-se</Link>
       <Link url={""}>Minha Playlist</Link>
       <Link url={""}>Me pague um café!</Link>
       <Link url={""}>Conheça o curso DEV</Link>
       </ul>
       </div>
       <div className="socialLinks">
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
