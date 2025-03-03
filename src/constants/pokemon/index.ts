import { Gender, Stage, stageOptions } from '@/enum/pokemon';
import { PokemonForm } from '@/types/pokemon';
import { fromSelect } from '@/utils/enum-utils';

export const pokemonDefaultValues: PokemonForm = {
  name: '',
  type: null,
  image: null,
  imageUrl: null,
  stage: fromSelect(Stage.BASIC, stageOptions),
  evolvedFrom: null,
  gender: Gender.UNKNOWN,
  isFossil: false,
};
