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
    </>
  );
}

/* 
Q: Remove the Context Provider. What happens to the Clock component? Why?
A: If we remove the ContextProvider, the Clock component can't access the LanguageContext and will use "en", the initial context value, instead.
*/

export default App;
