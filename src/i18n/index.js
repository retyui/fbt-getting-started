import { IntlViewerContext } from "fbt";
import { getBcp47ByLocale, isRtl } from "./consts/locales";

const updateLangAttr = locale => {
  document.documentElement.lang = getBcp47ByLocale(locale);
};

const chnageRltClassName = locale => {
  document.body.className = isRtl(locale) ? "rtl" : "ltr";
};

export const setLocale = locale => {
  IntlViewerContext.locale = locale;

  updateLangAttr(locale);
  chnageRltClassName(locale);
};
