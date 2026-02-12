import './App.css'
import Perfil from './components/Perfil/Perfil'
function App() {

  return (
    <div id="app">

<Perfil />

       <div className="perfil">
       <img src="https://placehold.co/200x200" alt="perfil" />
       </div>
       <p>@Seu Nome</p>
       <div className="switch">
        Botão Switch
       </div>
       <div className="links"></div>
       <div className="socialLinks"></div>
       <div className='rodape'></div>
    </div>
  )
}

export default App
