import { useLang } from "../i18n";
import { PAGES_IT } from "./pagesIt";
import { PAGES_EN } from "./pagesEn";

const PAGES = { it: PAGES_IT, en: PAGES_EN };

export const usePages = () => {
  const { lang } = useLang();
  return PAGES[lang] || PAGES.it;
};
