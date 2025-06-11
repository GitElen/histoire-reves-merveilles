const prixFixe = "1,99 €";

const genericDescription = (title) => `
Découvrez ${title}, un pack de coloriages conçu pour les enfants de 3 à 6 ans.<br>
Il contient 10 illustrations originales et amusantes, parfaites pour stimuler la créativité et l’imagination.<br>
Chaque dessin est prêt à être imprimé et colorié, idéal pour des moments calmes et joyeux à la maison.<br>
Téléchargez instantanément ce pack après votre achat et laissez la magie des couleurs illuminer la journée de votre enfant !`;

const generateImages = (startIndex) => [
  `images/products/2025/${startIndex}.png`,
  `images/products/2025/${startIndex + 1}.png`,
  `images/products/2025/${startIndex + 2}.png`,
];

const products = [
  {
    id: 'coloring1',
    title: 'Lina et le Balai Capricieux',
    description: genericDescription('Lina et le Balai Capricieux'),
    price: prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: generateImages(1),
    active: true
  },
  {
    id: 'coloring2',
    title: 'Aventure dans la Forêt',
    description: genericDescription('Aventure dans la Forêt'),
    price: prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: generateImages(4),
    active: false
  },
  // Ajoute les autres packs ici
];

export default products;
