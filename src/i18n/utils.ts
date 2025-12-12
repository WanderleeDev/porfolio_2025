import { ui } from "./ui";

export function getTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof lang]) {
    return ui[lang][key] || ui["es"][key];
  };
}
