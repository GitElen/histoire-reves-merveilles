// data.js
import productsData from '../data/products-data.js';

const sharedPackInfo = {
  titreFixe: 'Pack de 10 coloriages à imprimer',
  descriptionFixe:
    'Téléchargez ce pack de coloriages et offrez à vos enfants un moment créatif et ludique !',
  prixFixe: '1,99 €',
  buttonFixe: 'Visualiser le pack'
};

const products = productsData.filter(p => p.active);

const generateHomepageImages = count => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const imageNumber = i * 3 + 1; // 1, 4, 7, 10, ...
    result.push({
      id: `coloring${i + 1}`,
      img: `../images/products/2025/${imageNumber}.png`
    });
  }
  return result;
};

const homepagePacks = generateHomepageImages(products.length);

const constants = {
  packsPerPage: 3,
  defaultProductId: 'coloring1'
};

export { homepagePacks, products, sharedPackInfo, constants };
