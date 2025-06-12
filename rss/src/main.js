import 'bootstrap/dist/css/bootstrap.min.css';

const form = document.getElementById('rss-form');
const input = document.getElementById('url-input');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = input.value.trim();

  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    feedback.textContent = 'Ссылка должна начинаться с http:// или https://';
    feedback.classList.remove('text-success');
    feedback.classList.add('text-danger');
    return;
  }

  feedback.textContent = 'RSS успешно добавлен!';
  feedback.classList.remove('text-danger');
  feedback.classList.add('text-success');

  input.value = '';
});
