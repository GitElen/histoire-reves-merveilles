// data.js

// Infos partagées par tous les packs (page accueil)
const sharedPackInfo = {
  titreFixe: "Pack de 10 coloriages à imprimer",
  descriptionFixe: "Téléchargez ce pack de coloriages et offrez à vos enfants un moment créatif et ludique !",
  prixFixe: "1,90 €"
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

// Tous les produits pour les pages individuelles
const products = [
  {
    id: 'coloring1',
    title: 'Le Super Coloriage Magique',
    description: 'Un coloriage unique avec 20 pages d’animaux à colorier. Parfait pour les 3-6 ans.',
    price: sharedPackInfo.prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: [
      'images/products/2025/4.png',
      'images/products/2025/test.png',
      'images/products/2025/7.png',
    ]
  },
  {
    id: 'coloring2',
    title: 'Aventure dans la Forêt',
    description: 'Coloriage avec 15 pages sur le thème de la forêt magique.',
    price: sharedPackInfo.prixFixe,
    video: 'https://youtu.be/TWqgkazhCdw',
    images: [
      'images/products/2025/7.png',
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
