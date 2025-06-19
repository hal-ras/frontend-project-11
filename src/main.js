import 'bootstrap/dist/css/bootstrap.min.css';
import { validateUrl } from './validator.js';
import { initView } from './view.js';

const state = {
  feeds: [],
  form: {
    valid: false,
    error: null,
  },
};

const elements = {
  form: document.querySelector('.rss-form'),
  input: document.getElementById('url-input'),
  feedback: document.querySelector('.feedback'),
};

const watchedState = initView(state, elements);

elements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = elements.input.value.trim();

  validateUrl(url, state.feeds)
    .then(() => {
      watchedState.feeds = [...state.feeds, url];
      watchedState.form = { valid: true, error: null };
    })
    .catch((error) => {
      watchedState.form = { valid: false, error };
    });
});