import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as resources from './resources';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('vi'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    initImmediate: false,
    fallbackLng: 'vi',
    debug: true,
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            translation: value,
          },
        }),
        {},
      ),
    },
  });

export function t(key) {
  return i18next.t(key);
}

export function changeLanguage() {
  if (i18next.language === 'en') {
    i18next.changeLanguage('vi');
  } else {
    i18next.changeLanguage('en');
  }
}

export default i18next;
