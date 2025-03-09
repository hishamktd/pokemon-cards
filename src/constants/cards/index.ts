import { CardType } from '@/enum/cards';
import { CardsForm } from '@/types/cards';

export const pokemonCardTypeDValues = {
  pokemon: null,
  type: null,
  isEx: false,
  isFossil: false,
};

export const itemFossilCardTypeDValues = {
  pokemon: null,
};

export const cardsDefaultValues: CardsForm = {
  name: '',
  description: '',
  cardType: CardType.POKEMON,
  thumbnail: null,
  expansion: null,
  ...pokemonCardTypeDValues,
  ...itemFossilCardTypeDValues,
};
