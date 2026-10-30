const cards = [...document.querySelectorAll('.card')];
const filters = [...document.querySelectorAll('[data-filter]')];
const status = document.querySelector('.filter-status');
const dialog = document.querySelector('dialog');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const favoritesOnly = button.dataset.filter === 'favorites';
    filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach((card) => { card.hidden = favoritesOnly && card.dataset.favorite !== 'true'; });
    status.textContent = `${cards.filter((card) => !card.hidden).length} projects shown`;
  });
});

cards.forEach((card) => {
  card.querySelector('.open-project').addEventListener('click', () => {
    document.querySelector('#dialog-title').textContent = card.dataset.project;
    document.querySelector('#dialog-description').textContent = card.querySelector('.description').textContent;
    dialog.showModal();
  });
});

document.querySelectorAll('.close-dialog').forEach((button) => {
  button.addEventListener('click', () => dialog.close());
});
