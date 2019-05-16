import React from "react";

import { locales } from "./i18n/consts/locales";

function Locales({ updateLocale }) {
  return (
    <ul>
      {locales.map(({ locale, displayName }) => (
        <li key={locale}>
          <button onClick={() => updateLocale(locale)}>{displayName}</button>
        </li>
      ))}
    </ul>
  );
}

export default Locales;
