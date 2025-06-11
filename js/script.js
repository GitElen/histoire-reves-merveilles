// script.js

import { homepagePacks, sharedPackInfo, constants } from './data.js';

const { packsPerPage } = constants;
const { titreFixe, descriptionFixe, prixFixe, buttonFixe } = sharedPackInfo;

const totalPages = Math.ceil(homepagePacks.length / packsPerPage);
let currentPage = 1;

const grid = document.getElementById('grid');
const pagination = document.getElementById('pagination');

function renderGrid() {
  grid.innerHTML = '';
  const start = (currentPage - 1) * packsPerPage;
  const end = start + packsPerPage;
  const currentPacks = homepagePacks.slice(start, end);

  currentPacks.forEach(pack => {
    const div = document.createElement('div');
    div.className = 'pack';
    div.innerHTML = `
      <img src="${pack.img}" alt="${titreFixe} ${pack.id}" />
      <div class="pack-title">${titreFixe}</div>
      <div class="pack-desc">${descriptionFixe}</div>
      <div class="pack-price">Prix : ${prixFixe}</div>
      <div class="pack-button"><a href="product.html?id=${pack.id}" target="_blank" rel="noopener">${buttonFixe}</a></div>
    `;
    grid.appendChild(div);
  });
}

function renderPagination() {
  pagination.innerHTML = '';

  const prevBtn = document.createElement('button');
  prevBtn.textContent = 'Précédent';
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
  pagination.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    if (i === currentPage) btn.classList.add('active');
    btn.addEventListener('click', () => goToPage(i));
    pagination.appendChild(btn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Suivant';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
  pagination.appendChild(nextBtn);
}

function goToPage(page) {
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderGrid();
  renderPagination();
}

renderGrid();
renderPagination();
