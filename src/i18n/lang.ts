import en from "./en";
import cs from "./cs";

type LocalesType = {
  [key: string]: {
    [key: string]: LocaleObj;
  };
};

type LocaleObj = {
  [key: string]: string | LocaleObj;
};

export const LOCALES: LocalesType = { en, cs };

export const DEFAULT_LANG = "en";
export const AVAILABLE_LANGS = Object.keys(LOCALES);

export const getTranslationByPath = (path: string[], locale: LocaleObj) => {
  let reduceObj: LocaleObj | string = locale;
  path.forEach((key) => {
    if (!reduceObj || typeof reduceObj === "string") return;

    reduceObj = reduceObj[key];
  });

  if (!reduceObj || (typeof reduceObj as string) !== "string") {
    console.warn(`No localized text was found at "${path}"`);
    return;
  }

  return reduceObj;
};

export const useTranslations =
  (lang: string, group: string) => (path: string[]) =>
    getTranslationByPath(path, LOCALES[lang][group]);

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (AVAILABLE_LANGS.includes(lang)) return lang;
  return DEFAULT_LANG;
}
