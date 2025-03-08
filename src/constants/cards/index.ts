import { CardType } from '@/enum/cards';
import { CardsForm } from '@/types/cards';

export const cardsDefaultValues: CardsForm = {
  name: '',
  description: '',
  cardType: CardType.POKEMON,
  image: null,
  expansion: null,

  pokemon: null,
  type: null,
  isEx: false,
  isFossil: false,
};
