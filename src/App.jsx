import { useState } from "react";
import Clock from "./Components/Clock";
import LanguageContext from "./Components/LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <LanguageContext.Provider value={language}>
        <div>
          <Clock />
          <label htmlFor="language">Select language: </label>
          <select
            name="language"
            id="language"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="it">Italian</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="sr">Serbian</option>
          </select>
        </div>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
