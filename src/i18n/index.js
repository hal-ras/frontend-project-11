import i18next from 'i18next';
import resources from './resources.js';

const i18n = i18next.createInstance();
i18n.init({
  lng: 'ru',
  resources,
});

export default i18n;
