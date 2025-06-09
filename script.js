const packsData = [
  { id: 1, img: "https://via.placeholder.com/300x200.png?text=Coloriage+1", lien: "LIEN_VERS_PAIEMENT_1" },
  { id: 2, img: "https://via.placeholder.com/300x200.png?text=Coloriage+2", lien: "LIEN_VERS_PAIEMENT_2" },
  { id: 3, img: "https://via.placeholder.com/300x200.png?text=Coloriage+3", lien: "LIEN_VERS_PAIEMENT_3" },
  // plus tard tu ajoutes juste des objets {id, img, lien}
];

const titreFixe = "Pack de 10 coloriages à imprimer";
const descriptionFixe = "Téléchargez ce pack de coloriages et offrez à vos enfants un moment créatif et ludique !";
const prixFixe = "1,90 €";

const packsPerPage = 3;
let currentPage = 1;
const totalPages = Math.ceil(packsData.length / packsPerPage);

const grid = document.getElementById("grid");
const pagination = document.getElementById("pagination");

function renderGrid() {
  grid.innerHTML = "";
  const start = (currentPage -1)*packsPerPage;
  const end = start + packsPerPage;
  const currentPacks = packsData.slice(start, end);

  currentPacks.forEach(pack => {
    const div = document.createElement("div");
    div.className = "pack";
    div.innerHTML = `
      <img src="${pack.img}" alt="${titreFixe} ${pack.id}" />
      <div class="pack-title">${titreFixe}</div>
      <div class="pack-desc">${descriptionFixe}</div>
      <div class="pack-price">Prix : ${prixFixe}</div>
      <div class="pack-button"><a href="${pack.lien}" target="_blank" rel="noopener">Acheter ce pack</a></div>
    `;
    grid.appendChild(div);
  });
}

function renderPagination() {
  pagination.innerHTML = "";

  // Précédent
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Précédent";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => goToPage(currentPage - 1));
  pagination.appendChild(prevBtn);

  // Pages numérotées
  for(let i=1; i<= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if(i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => goToPage(i));
    pagination.appendChild(btn);
  }

  // Suivant
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Suivant";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => goToPage(currentPage + 1));
  pagination.appendChild(nextBtn);
}

function goToPage(page) {
  if(page < 1 || page > totalPages) return;
  currentPage = page;
  renderGrid();
  renderPagination();
}

renderGrid();
renderPagination();
