import {ImageSourcePropType} from 'react-native';

export interface MovieType {
  name: string;
  image: ImageSourcePropType;
  titleImage: ImageSourcePropType;
  release: string;
  languages: string;
  genre: string;
}

export const movies: MovieType[] = [
  {
    name: 'Loki',
    image: require('./images/Loki.png'),
    titleImage: require('./images/LokiTitle.png'),
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    name: 'Luca',
    image: require('./images/Luca.png'),
    titleImage: require('./images/LucaTitle.png'),
    release: '2021',
    languages: '6 Languages',
    genre: 'Family - Comedy',
  },
  {
    name: 'Guardian Of Galaxy Vol.3',
    image: require('./images/Guardian.png'),
    titleImage: require('./images/GuardianTitle.png'),
    release: '2023',
    languages: 'English',
    genre: 'Action - Superhero',
  },
  {
    name: 'Elemental',
    image: require('./images/Elemental.png'),
    titleImage: require('./images/ElementalTitle.png'),
    release: '2023',
    languages: '2 Languages',
    genre: 'Comedy - Kids',
  },
  {
    name: 'The Little Mermaid',
    image: require('./images/Mermaid.png'),
    titleImage: require('./images/MermaidTitle.png'),
    release: '2023',
    languages: 'English',
    genre: 'Family - Musical',
  },
];