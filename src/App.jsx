import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/languageSelector.jsx";

function App() {
  const { t } = useTranslation();
  const { line1, line2 } = t("description", { Bamboo: "Bamboo" });

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        {" "}
        <Trans
          // i18nKey={description.line1}
          i18nKey={line1}
          values={{
            Bamboo: t("description.Bamboo"),
          }}
          components={{ 1: <b /> }}
        />
      </span>

      <p>{line1}</p>
      <span>{line2}</span>
    </div>
  );
}

export default App;
