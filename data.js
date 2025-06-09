// data.js

// Infos partagées par tous les packs (page accueil)
const sharedPackInfo = {
  titreFixe: "Pack de 10 coloriages à imprimer",
  descriptionFixe: "Téléchargez ce pack de coloriages et offrez à vos enfants un moment créatif et ludique !",
  prixFixe: "1,90 €",
  buttonFixe: "Visualiser le pack"
};

// Packs visibles sur la page d’accueil
const homepagePacks = [
  {
    id: 'coloring1',
    img: 'images/colorings/2025/4.png'
  },
  {
    id: 'coloring2',
    img: 'images/colorings/2025/7.png'
  }
];

const genericDescription = (title) => `
Découvrez ${title}, un pack de coloriages conçu pour les enfants de 3 à 6 ans.<br>
Il contient 10 illustrations originales et amusantes, parfaites pour stimuler la créativité et l’imagination.<br>
Chaque dessin est prêt à être imprimé et colorié, idéal pour des moments calmes et joyeux à la maison.<br>

Téléchargez instantanément ce pack après votre achat et laissez la magie des couleurs illuminer la journée de votre enfant !`;


// Tous les produits pour les pages individuelles
const products = [
  {
    id: 'coloring1',
    title: 'Le Super Coloriage Magique',
    description: genericDescription('Le Super Coloriage Magique') ,
    price: sharedPackInfo.prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: [
      'images/products/2025/4.png',
      'images/products/2025/test.png',
      'images/products/2025/Coloringwatermark.png',
    ]
  },
  {
    id: 'coloring2',
    title: 'Aventure dans la Forêt',
    description: genericDescription('Aventure dans la Forêt'),
    price: sharedPackInfo.prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: [
      'images/products/2025/Coloringwatermark.png',
      'images/products/2025/test.png',
      'images/products/2025/4.png',
    ]
  }
];

// Constantes techniques
const constants = {
  packsPerPage: 3,
  defaultProductId: 'coloring1'
};

export { homepagePacks, products, sharedPackInfo, constants };
