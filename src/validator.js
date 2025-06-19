import * as yup from 'yup';
import i18n from './i18n/index.js';

export const validateUrl = (url, existingUrls) => {
  const schema = yup
    .string()
    .url(i18n.t('errors.invalidUrl'))
    .required(i18n.t('errors.required'))
    .notOneOf(existingUrls, i18n.t('errors.duplicate'));

  return new Promise((resolve, reject) => {
    schema
      .validate(url, { abortEarly: false })
      .then(() => resolve(null))
      .catch((error) => reject(error.errors[0]));
  });
};
