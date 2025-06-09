// Tableau des produits
const products = [
  {
    id: 'coloring1',
    title: 'Le Super Coloriage Magique',
    description: 'Un coloriage unique avec 20 pages d’animaux à colorier. Parfait pour les 3-6 ans.',
    price: '4,99 €',
    video: 'https://www.youtube.com/embed/ID_DE_TA_VIDEO',
    images: [
      'images/products/coloring1-cover.jpg',
      'images/products/coloring1-page2.jpg',
      'images/products/coloring1-page3.jpg',
    ]
  },
  {
    id: 'coloring2',
    title: 'Aventure dans la Forêt',
    description: 'Coloriage avec 15 pages sur le thème de la forêt magique.',
    price: '3,99 €',
    video: 'https://www.youtube.com/embed/ID_VIDEO_COLORING2',
    images: [
      'images/products/coloring2-cover.jpg',
      'images/products/coloring2-page2.jpg',
      'images/products/coloring2-page3.jpg',
    ]
  }
  // Ajoute ici d'autres produits...
];

// Fonction utilitaire pour récupérer le paramètre `id` dans l'URL
function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const productId = getParam('id') || 'coloring1'; // Par défaut 'coloring1'
const product = products.find(p => p.id === productId);

const container = document.getElementById('product-container');

if (!product) {
  container.innerHTML = '<p>Produit non trouvé.</p>';
} else {
  container.innerHTML = `
    <div class="product">
      <section class="gallery">
        <img src="${product.images[0]}" alt="Image principale ${product.title}" id="main-img" class="gallery-main" />
        <div class="gallery-thumbs">
          ${product.images.map((src, i) =>
            `<img src="${src}" alt="Image ${i + 1} ${product.title}" class="thumb ${i === 0 ? 'active' : ''}">`
          ).join('')}
        </div>
      </section>
      <section class="details">
        <h1 class="details-title">${product.title}</h1>
        <p class="details-desc">${product.description}</p>
        <p class="details-price">Prix : ${product.price}</p>
        <button class="buy-button">Acheter maintenant</button>
        <div class="video-container">
          <iframe src="${product.video}" title="Présentation ${product.title}" frameborder="0" allowfullscreen></iframe>
        </div>
      </section>
    </div>
  `;

  // Gestion clic sur miniatures
  const mainImg = document.getElementById('main-img');
  const thumbs = container.querySelectorAll('.thumb');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImg.src = thumb.src;
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}
