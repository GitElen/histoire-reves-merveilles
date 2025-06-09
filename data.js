// data.js

// Packs visibles sur la page d’accueil
const homepagePacks = [
  {
    id: 'coloring1',
    img: 'images/Bannière.png'
  },
  {
    id: 'coloring2',
    img: 'images/Bannière.png'
  }
];

// Tous les produits pour les pages individuelles
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
];

// Infos partagées par tous les packs (page accueil)
const sharedPackInfo = {
  titreFixe: "Pack de 10 coloriages à imprimer",
  descriptionFixe: "Téléchargez ce pack de coloriages et offrez à vos enfants un moment créatif et ludique !",
  prixFixe: "1,90 €"
};

// Constantes techniques
const constants = {
  packsPerPage: 3,
  defaultProductId: 'coloring1'
};

export { homepagePacks, products, sharedPackInfo, constants };
