import { useEffect, useState, useCallback } from "react";
import styles from "./MovieDescription.module.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState({});
  const [translatedPlot, setTranslatedPlot] = useState("");
  const [translatedInfo, setTranslatedInfo] = useState({});
  const [isTranslating, setIsTranslating] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const saved = localStorage.getItem("selectedLanguage");
    if (saved) return saved;
    return (navigator.languages?.[0] || navigator.language).split("-")[0];
  });

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
  };

  const translateText = useCallback(
    async (text) => {
      try {
        if (selectedLanguage === "en" || !text || text === "N/A") return text;

        const response = await fetch(
          `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${selectedLanguage}&dt=t&q=${encodeURIComponent(text)}`,
        );

        const data = await response.json();

        if (Array.isArray(data?.[0])) {
          return data[0].map((item) => item?.[0]).join("");
        }

        return text;
      } catch (error) {
        console.error("Erro ao traduzir:", error);
        return text;
      }
    },
    [selectedLanguage],
  );

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const response = await fetch(`${props.apiUrl}&i=${props.movieID}`);
        const data = await response.json();

        setMovieDesc(data);

        if (data?.Plot && data.Plot !== "N/A") {
          setIsTranslating(true);

          const translatedPlot = await translateText(data.Plot);
          const translatedTitle = await translateText(data.Title);
          const translatedGenre = await translateText(data.Genre);
          const translatedActors = await translateText(data.Actors);

          setTranslatedPlot(translatedPlot);
          setTranslatedInfo({
            title: translatedTitle,
            genre: translatedGenre,
            actors: translatedActors,
          });

          setIsTranslating(false);

          return;
        }

        setTranslatedPlot("Sinopse indisponível.");
      } catch (error) {
        console.error(error);

        setTranslatedPlot("Não foi possível carregar a sinopse.");
      }
    };

    loadMovie();
  }, [props.apiUrl, props.movieID, translateText]);

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieHeader}>
          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt="" />

          <div className={styles.movieType}>
            <div>
              <img src="/favicon.png" alt="" />
              {movieDesc.Type}
              <h1>{translatedInfo.title || movieDesc.Title}</h1>

              <a
                href={`https://google.com/search?q=${encodeURIComponent(movieDesc.Title)}`}
                target="_blank"
                rel="noreferrer"
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
            <p>Elenco: {translatedInfo.actors || movieDesc.Actors}</p>
            <p>Gênero: {translatedInfo.genre || movieDesc.Genre}</p>
          </div>
        </div>

        <div className={styles.desc}>
          <p>
            Sinopse:{" "}
            {isTranslating ? "Traduzindo..." : translatedPlot || movieDesc.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
