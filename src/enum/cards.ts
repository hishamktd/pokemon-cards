import { toSelect } from '@/utils/enum-utils';
import { RadioOptions } from '@core/components/app-inputs';

export enum CardType {
  POKEMON = 'POKEMON',
  SUPPORTER = 'SUPPORTER',
  ITEM = 'ITEM',
  POKEMON_TOOL = 'POKEMON_TOOL',
}

export const cardTypeOptions = toSelect<RadioOptions>(CardType);
