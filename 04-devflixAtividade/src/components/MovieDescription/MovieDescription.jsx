import { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";

const translateText = async (text) => {
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt-br`
  );

  const data = await response.json();
  return data.responseData.translatedText;
};

const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState([]);

  useEffect(() => {
  const fetchMovie = async () => {
    try {
      const response = await fetch(`${props.apiUrl}&i=${props.movieID}`);
      const data = await response.json();

      const translatedPlot = await translateText(data.Plot);
      const translatedGenre = await translateText(data.Genre);

      setMovieDesc({
        ...data,
        Plot: translatedPlot,
        Genre: translatedGenre
      });

    } catch (error) {
      console.error(error);
    }
  };

  fetchMovie();
}, []);

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt="" />

          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>

          <div className={styles.movieType}>
            <div>
              <img src="/Davylogo.png" alt="" />
              {movieDesc.Type}
              <h1>{movieDesc.Title}</h1>
              <a
                href={`https://google.com/search?q=${encodeURIComponent(movieDesc.Title)}`}
                target="_blank"
              >
                ▶️ Assistir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação: {movieDesc.imdbRating} | Duração: {movieDesc.Runtime} |{" "}
            {movieDesc.Released}
          </div>
          <div className={styles.containerFlex}>
            <p>Elenco: {movieDesc.Actors}</p>
            <p>Gênero: {movieDesc.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {movieDesc.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
