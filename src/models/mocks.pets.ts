import { Pet } from '../pet';

export const getMockPets = (): Pet[] => [
  new Pet('Nacha', 'Bullterrier', 'Mi tío'),
  new Pet('Rumbi', 'Boxer', 'Mi tía'),
  new Pet('Kala', 'Border Collie', 'María'),
];
