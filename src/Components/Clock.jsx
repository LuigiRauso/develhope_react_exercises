import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "./LanguageContext";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("it-IT"));
  const language = useContext(LanguageContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString(language));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [language]);

  const languageMessages = {
    en: "Current time: ",
    it: "L'ora attuale: ",
    fr: "Heure actuelle: ",
    es: "Hora actual: ",
    sr: "Trenutno vreme: ",
  };

  return (
    <h2>
      {languageMessages[language]}
      {time}
    </h2>
  );
}

export default Clock;
