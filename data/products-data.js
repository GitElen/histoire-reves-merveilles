const prixFixe = '1,99 €';

const genericDescription = title => `
Découvrez ${title}, un pack de coloriages conçu pour les enfants de 3 à 6 ans.<br>
Il contient 10 illustrations originales et amusantes, parfaites pour stimuler la créativité et l’imagination.<br>
Chaque dessin est prêt à être imprimé et colorié, idéal pour des moments calmes et joyeux à la maison.<br>
Téléchargez instantanément ce pack après votre achat et laissez la magie des couleurs illuminer la journée de votre enfant !`;

const generateImages = startIndex => [
  `../images/products/2025/${startIndex}.webp`,
  `../images/products/2025/${startIndex + 1}.webp`,
  `../images/products/2025/${startIndex + 2}.webp`
];

const products = [
  {
    id: 'coloring1',
    title: 'Lina et le Balai Capricieux',
    description: genericDescription('Lina et le Balai Capricieux'),
    price: prixFixe,
    video: 'G02eaSWAJ2o',
    images: generateImages(1),
    link: 'https://buy.stripe.com/8x25kE9WWdn02Y4bxP6Vq00',
    active: true
  },
  {
    id: 'coloring2',
    title: 'Gobelet et la Paille Bavarde',
    description: genericDescription('Gobelet et la Paille Bavarde'),
    price: prixFixe,
    video: 'BaBbue0x27Q',
    images: generateImages(4),
    link: 'https://buy.stripe.com/9B69AUglk5Uy9msbxP6Vq04',
    active: true
  },
  {
    id: 'coloring3',
    title: 'Isaac et le Mur Qui Chuchotait',
    description: genericDescription('Isaac et le Mur Qui Chuchotait'),
    price: prixFixe,
    video: 'TBapOF2x4FM',
    images: generateImages(7),
    link: 'https://buy.stripe.com/6oU3cw8SS5Uy56c31j6Vq02',
    active: true
  },
  {
    id: 'coloring4',
    title: 'Le Livre Qui Riait Trop Fort',
    description: genericDescription('Le Livre Qui Riait Trop Fort'),
    price: prixFixe,
    video: '',
    images: generateImages(10),
    link: 'https://buy.stripe.com/6oU5kE2uu3Mq8iogS96Vq01',
    active: false
  },
  {
    id: 'coloring5',
    title: 'Zoé et le Banc des Secrets',
    description: genericDescription('Zoé et le Banc des Secrets'),
    price: prixFixe,
    video: 'SISxjRf156g',
    images: generateImages(13),
    link: 'https://buy.stripe.com/9B6eVe1qq4Qu7ek45n6Vq03',
    active: true
  },
  {
    id: 'coloring6',
    title: 'La Fleur Qui Ne Voulait Pas Faner',
    description: genericDescription('La Fleur Qui Ne Voulait Pas Faner'),
    price: prixFixe,
    video: '',
    images: generateImages(16),
    link: '',
    active: false
  },
  {
    id: 'coloring7',
    title: 'L’Écharpe de Lune',
    description: genericDescription('L’Écharpe de Lune'),
    price: prixFixe,
    video: '',
    images: generateImages(19),
    link: 'https://buy.stripe.com/fZubJ23yygzcdCIcBT6Vq07',
    active: false
  },
  {
    id: 'coloring8',
    title: 'Le Sablier Qui Accélérait Tout',
    description: genericDescription('Le Sablier Qui Accélérait Tout'),
    price: prixFixe,
    video: '',
    images: generateImages(22),
    link: '',
    active: false
  },
  {
    id: 'coloring9',
    title: 'Kadi et la Fête des Doudous',
    description: genericDescription('Kadi et la Fête des Doudous'),
    price: prixFixe,
    video: '',
    images: generateImages(25),
    link: '',
    active: false
  },
  {
    id: 'coloring10',
    title: 'Coquinette, la poussinette part en Vacances',
    description: genericDescription('Coquinette, la poussinette part en Vacances'),
    price: prixFixe,
    video: 'FVaboX8Gqtk',
    images: generateImages(28),
    link: 'https://buy.stripe.com/fZu00k8SS1Eiaqw7hz6Vq06',
    active: true
  },
  {
    id: 'coloring11',
    title: 'Camping dans la Forêt Enchantée',
    description: genericDescription('Camping dans la Forêt Enchantée'),
    price: prixFixe,
    video: '',
    images: generateImages(31),
    link: '',
    active: false
  },
  {
    id: 'coloring12',
    title: 'Coquinette, la poussinette qui posait trop de questions',
    description: genericDescription('Coquinette, la poussinette qui posait trop de questions'),
    price: prixFixe,
    video: '3SoYv28M58g',
    images: generateImages(34),
    link: 'https://buy.stripe.com/fZubJ21qqer42Y431j6Vq05',
    active: true
  }
  // Ajoute les autres packs ici
];

export default products;
