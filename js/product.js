// product.js

import { products, constants } from '/js/data.js';

const productId =
  new URLSearchParams(window.location.search).get('id') || constants.defaultProductId;
const product = products.find(p => p.id === productId);

const container = document.getElementById('product-container');

if (!product) {
  container.innerHTML = '<p>Produit non trouvé.</p>';
} else {
  container.innerHTML = `
    <a href="../index.html" class="return-home">← Retour à l'accueil</a>
    <div class="product">
      <section class="gallery">
        <img src="${product.images[0]}" alt="Image principale ${product.title}" id="main-img" class="gallery-main" />
        <div class="gallery-thumbs">
          ${product.images
            .map(
              (src, i) =>
                `<img src="${src}" alt="Image ${i + 1} ${product.title}" class="thumb ${i === 0 ? 'active' : ''}" loading="lazy">`
            )
            .join('')}
        </div>
      </section>
      <section class="details">
        <h1 class="details-title">🎨${product.title}</h1>
        <p class="details-desc">${product.description}</p>
        <p class="details-price">Prix : ${product.price}</p>
        <a href=${product.link} target="_blank" class="buy-button">
          Acheter maintenant
        </a>
        <div class="payment-info">
          <img src="https://stripe.com/img/v3/home/twitter.png" alt="Paiement sécurisé Stripe" />
          <span>Paiement sécurisé via Stripe</span>
        </div>
        <div class="video-container">
         <a
            href="https://www.youtube.com/watch?v=${product.video}"
            target="_blank"
            rel="noopener noreferrer"
            class="video-thumbnail"
            aria-label="Regarder la vidéo sur YouTube"
          >
            <img
              src="https://i.ytimg.com/vi/${product.video}/hqdefault.jpg"
              alt="Miniature vidéo YouTube"
              width="350"
              height="200"
              loading="lazy"
            />
            <span class="play-button"></span>
          </a>
        </div>
      </section>
    </div>
  `;

  // Galerie dynamique
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
