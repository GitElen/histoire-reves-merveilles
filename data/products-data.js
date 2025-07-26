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
    video: 'gQKDKbo-fZk',
    images: generateImages(10),
    link: 'https://buy.stripe.com/6oU5kE2uu3Mq8iogS96Vq01',
    active: true
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
    video: '4BWdwClKdkQ',
    images: generateImages(16),
    link: 'https://buy.stripe.com/9B6bJ28SSer49ms59r6Vq09',
    active: true
  },
  {
    id: 'coloring7',
    title: 'L’Écharpe de Lune',
    description: genericDescription('L’Écharpe de Lune'),
    price: prixFixe,
    video: 'YS0Ce1aXh-g',
    images: generateImages(19),
    link: 'https://buy.stripe.com/fZubJ23yygzcdCIcBT6Vq07',
    active: true
  },
  {
    id: 'coloring8',
    title: 'Le Sablier Qui Accélérait Tout',
    description: genericDescription('Le Sablier Qui Accélérait Tout'),
    price: prixFixe,
    video: '',
    images: generateImages(22),
    link: 'https://buy.stripe.com/eVqbJ2glk1Ei9msgS96Vq0b',
    active: false
  },
  {
    id: 'coloring9',
    title: 'Kadi et la Fête des Doudous',
    description: genericDescription('Kadi et la Fête des Doudous'),
    price: prixFixe,
    video: 'VX3y10qp380',
    images: generateImages(25),
    link: 'https://buy.stripe.com/28EdRac54aaOeGM7hz6Vq08',
    active: true
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
    link: 'https://buy.stripe.com/14AcN65GG5Uy7ekgS96Vq0a',
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
  },
  {
    id: 'coloring13',
    title: 'Craby, le crabe qui n’aimait pas l’eau',
    description: genericDescription('Craby, le crabe qui n’aimait pas l’eau'),
    price: prixFixe,
    video: '',
    images: generateImages(37),
    link: 'https://buy.stripe.com/fZu3cw0mm1Ei9mseK16Vq0c',
    active: false
  },
  {
    id: 'coloring14',
    title: 'Le Grand Pique-nique de l’Été',
    description: genericDescription('Le Grand Pique-nique de l’Été'),
    price: prixFixe,
    video: '',
    images: generateImages(40),
    link: 'https://buy.stripe.com/4gMbJ2glkgzc56cdFX6Vq0d',
    active: false
  },
  {
    id: 'coloring15',
    title: 'Rose veut rester en vacances',
    description: genericDescription('Rose veut rester en vacances'),
    price: prixFixe,
    video: '',
    images: generateImages(43),
    link: 'https://buy.stripe.com/8x28wQ2uu6YCgOU7hz6Vq0e',
    active: false
  },
  {
    id: 'coloring16',
    title: 'La Rentrée de Coquinette la Poussinette',
    description: genericDescription('La Rentrée de Coquinette la Poussinette'),
    price: prixFixe,
    video: '',
    images: generateImages(46),
    link: 'https://buy.stripe.com/eVq6oI6KK5UydCI31j6Vq0f',
    active: false
  },
  {
    id: 'coloring17',
    title: 'Thomas et les Crayons',
    description: genericDescription('Thomas et les Crayons'),
    price: prixFixe,
    video: '',
    images: generateImages(49),
    link: 'https://buy.stripe.com/8x200kc542Im1U00Tb6Vq0g',
    active: false
  },
  {
    id: 'coloring18',
    title: 'Le Cahier Qui Avalait les Bêtises',
    description: genericDescription('Le Cahier Qui Avalait les Bêtises'),
    price: prixFixe,
    video: '',
    images: generateImages(52),
    link: 'https://buy.stripe.com/7sYdRa3yy2ImdCIfO56Vq0h',
    active: false
  }
  // Ajoute les autres packs ici
];

export default products;
