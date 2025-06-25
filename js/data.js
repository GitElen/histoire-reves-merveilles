// data.js
import productsData from '/data/products-data.js';

const sharedPackInfo = {
  descriptionFixe:
    'Téléchargez ce pack de 10 coloriages à imprimer et offrez à vos enfants un moment créatif et ludique !',
  prixFixe: '1,99 €',
  buttonFixe: 'Visualiser le pack'
};

const generateHomepageImages = activeProducts => {
  return activeProducts.map(product => {
    const imageStart = parseInt(product.images[0].match(/\/(\d+)\.webp$/)[1]);
    return {
      id: product.id,
      title: product.title,
      img: `/images/products/2025/${imageStart}.webp`
    };
  });
};

const products = productsData.filter(p => p.active);
const homepagePacks = generateHomepageImages(products);

const constants = {
  packsPerPage: 3,
  defaultProductId: 'coloring1'
};

export { homepagePacks, products, sharedPackInfo, constants };
