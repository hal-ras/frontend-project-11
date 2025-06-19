import onChange from 'on-change';

const render = (state, elements) => {
  const { input, feedback } = elements;

  input.classList.remove('is-invalid');
  feedback.textContent = '';

  if (state.form.error) {
    input.classList.add('is-invalid');
    feedback.textContent = state.form.error;
  }

  if (state.form.valid) {
    input.value = '';
    input.focus();
  }
};

export const initView = (state, elements) => {
  const watchedState = onChange(state, () => render(state, elements));
  return watchedState;
};