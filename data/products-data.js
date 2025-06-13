const prixFixe = '1,99 €';

const genericDescription = title => `
Découvrez ${title}, un pack de coloriages conçu pour les enfants de 3 à 6 ans.<br>
Il contient 10 illustrations originales et amusantes, parfaites pour stimuler la créativité et l’imagination.<br>
Chaque dessin est prêt à être imprimé et colorié, idéal pour des moments calmes et joyeux à la maison.<br>
Téléchargez instantanément ce pack après votre achat et laissez la magie des couleurs illuminer la journée de votre enfant !`;

const generateImages = startIndex => [
  `../images/products/2025/${startIndex}.png`,
  `../images/products/2025/${startIndex + 1}.png`,
  `../images/products/2025/${startIndex + 2}.png`
];

const products = [
  {
    id: 'coloring1',
    title: 'Lina et le Balai Capricieux',
    description: genericDescription('Lina et le Balai Capricieux'),
    price: prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: generateImages(1),
    link: 'https://buy.stripe.com/8x25kE9WWdn02Y4bxP6Vq00',
    active: true
  },
  {
    id: 'coloring2',
    title: 'Gobelet et la Paille Bavarde',
    description: genericDescription('Gobelet et la Paille Bavarde'),
    price: prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: generateImages(4),
    link: 'https://buy.stripe.com/9B69AUglk5Uy9msbxP6Vq04',
    active: false
  },
  {
    id: 'coloring3',
    title: 'Isaac et le Mur Qui Chuchotait',
    description: genericDescription('Isaac et le Mur Qui Chuchotait'),
    price: prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: generateImages(7),
    link: 'https://buy.stripe.com/6oU3cw8SS5Uy56c31j6Vq02',
    active: false
  },
  {
    id: 'coloring4',
    title: 'Le Livre Qui Riait Trop Fort',
    description: genericDescription('Le Livre Qui Riait Trop Fort'),
    price: prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: generateImages(10),
    link: 'https://buy.stripe.com/6oU5kE2uu3Mq8iogS96Vq01',
    active: false
  },
  {
    id: 'coloring5',
    title: 'Zoé et le Banc des Secrets',
    description: genericDescription('Zoé et le Banc des Secrets'),
    price: prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: generateImages(13),
    link: 'https://buy.stripe.com/9B6eVe1qq4Qu7ek45n6Vq03',
    active: false
  },
  {
    id: 'coloring6',
    title: 'La Fleur Qui Ne Voulait Pas Faner',
    description: genericDescription('La Fleur Qui Ne Voulait Pas Faner'),
    price: prixFixe,
    video: 'https://www.youtube.com/embed/TWqgkazhCdw',
    images: generateImages(16),
    link: '',
    active: false
  }
  // Ajoute les autres packs ici
];

export default products;
