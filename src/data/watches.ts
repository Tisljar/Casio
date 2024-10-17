export type WatchVariationType = {
  name: string;
  imgSrc: string;
  color: string;
};

export type WatchType = {
  id: string;
  name: string;
  sizes: string[];
  variations: WatchVariationType[];
  description: string;
  price: string;
};

export const watches: WatchType[] = [
  {
    id: 'babyRound',
    name: 'Baby-G',
    sizes: ['38', '40', '42', '44'],
    variations: [
      { name: 'BGA-320-2A1', imgSrc: 'baby-round-blue.png', color: 'blue' },
      { name: 'BGA-320-2A1', imgSrc: 'baby-round-purple.png', color: 'purple' },
    ],
    description:
      'The Baby-G Round offers a stylish design with robust features. Perfect for those who love an active lifestyle while maintaining a trendy look. Water-resistant and shock-proof for added durability.',
    price: '$145.00',
  },
  {
    id: 'babyRect',
    name: 'Baby-G',
    sizes: ['38', '40', '42', '44'],
    variations: [
      { name: 'BGD-10L-7', imgSrc: 'baby-rect-black.png', color: 'black' },
      { name: 'BGD-10L-7', imgSrc: 'baby-rect-white.png', color: 'white' },
      { name: 'BGD-10L-7', imgSrc: 'baby-rect-blue.png', color: 'blue' },
    ],
    description:
      'The Baby-G Rectangular model combines bold design with advanced features. With a rectangular case, it adds a unique touch to your wardrobe while being tough enough for all adventures.',
    price: '$160.00',
  },
  {
    id: 'calc',
    name: 'CA',
    sizes: ['38', '40', '42', '44'],
    variations: [
      { name: 'CA-53WB', imgSrc: 'calc-black.png', color: 'black' },
      { name: 'CA-53WB', imgSrc: 'calc-white.png', color: 'white' },
      { name: 'CA-53WB', imgSrc: 'calc-green.png', color: 'green' },
    ],
    description:
      'The Calculator Watch brings retro vibes with modern functionality. A built-in calculator keeps you on top of your game, whether you’re crunching numbers or just looking to stand out.',
    price: '$120.00',
  },
  {
    id: 'classy',
    name: 'MTD',
    sizes: ['38', '40', '42', '44'],
    variations: [
      { name: 'MTD-135D', imgSrc: 'classy-black.png', color: 'black' },
    ],
    description:
      'The MTD watch represents elegance and precision. With a sleek design, it’s perfect for formal occasions or daily wear. Built to impress and last with superior craftsmanship.',
    price: '$249.00',
  },
];