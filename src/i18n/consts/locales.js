const LOCALES = Object.freeze({
  en_US: {
    bcp47: "en-US",
    displayName: "English (US)\u200e",
    englishName: "English (US)",
    rtl: false
  },
  ru_RU: {
    bcp47: "ru-RU",
    displayName: "Русский",
    englishName: "Russian",
    rtl: false
  }
});

export const getBcp47ByLocale = locale => LOCALES[locale].bcp47;

export const isRtl = locale => LOCALES[locale].rtl;

export const locales = [...Object.entries(LOCALES)].map(
  ([locale, { displayName }]) => ({
    locale,
    displayName
  })
);
