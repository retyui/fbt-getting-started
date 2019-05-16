import React, { useState, useCallback } from "react";
import fbt from "fbt";

import Locales from "./Locales";
import { setLocale } from "./i18n";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [_, triggerReRender] = useState({});
  const updateLocale = useCallback(locale => {
    setLocale(locale);
    triggerReRender({});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt={fbt("logo", "Logo image alt attribute")}
        />
        <p>
          <fbt desc="How start text">
            Edit{" "}
            <fbt:param name="pathToApp">{<code>src/App.js</code>}</fbt:param>
            and save to reload.
          </fbt>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fbt desc="Lorn more link text">Learn React</fbt>
        </a>
        <Locales updateLocale={updateLocale} />
      </header>
    </div>
  );
}

export default App;
