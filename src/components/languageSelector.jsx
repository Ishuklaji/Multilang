import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
  { code: "ar", lang: "Arabic" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {languages.map((lang) => {
        return (
          <button
            className={lang.code === i18n.language ? "selected" : ""}
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
