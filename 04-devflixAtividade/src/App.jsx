import { useEffect, useState } from "react";
import "./App.css";

import todos from "./assets/TODOS.svg"
import logo from "./assets/DAVYFLIX.png";
import lupa from "./assets/search.svg";

import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";
import sun from "./assets/Sun.svg";
import moon from "./assets/MoonStars.svg";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //Alimentando a variavel movies
    setMovies(data.Search);
  };

  useEffect(() => {
    (async () => {
      await searchMovies("Hulk"); // termo para pesquina ao carregar o site
    })();
  }, []);

  return (
    <div id="App" className={darkMode ? "dark" : ""}>
      <button id="trocarTema" onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? moon : sun} alt="icone do tema" style={{ display:"flex", alignSelf: "center", width: "30px" }}/>
      </button>
      <img
        id="Logo"
        src={logo}
        alt="Logotipo do serviço de streaming Davyflix, com letras vermelhas e fundo preto, promovendo conteúdo de séries, filmes e entretenimento online."
      />

      <div className="search">
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pedir pro mago pesquisar"
        />
        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt="Botão de ação para pesquisa!"
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} apiUrl={apiUrl} />
          ))}
        </div>
      ) : (
        <h2 className="empty">Eu pesquisei TODOS os filmes <img width="25px" height="25px" src={todos} alt="TODOS OS FILMES" srcset="" />, TODAS as séries <img width="25px" height="25px" src={todos} alt="TODAS AS SÉRIES" srcset=""/>. Mas não tinha nenhum.</h2>
      )}

      <Rodape link={"https://github.com/EnzoNicoletti"}>EnzoNicoletti</Rodape>  
    </div>
  );
};

export default App;
