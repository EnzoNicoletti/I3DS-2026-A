import styles from "./LanguageSelector.module.css";

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const languages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "it", name: "Italiano" },
    { code: "ja", name: "日本語" },
    { code: "zh-CN", name: "中文 (简体)" },
    { code: "ru", name: "Русский" },
    { code: "ar", name: "العربية" },
    { code: "hi", name: "हिन्दी" },
    { code: "ko", name: "한국어" },
  ];

  return (
    <div className={styles.languageSelector}>
      <label htmlFor="language-select">Idioma:</label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className={styles.select}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
