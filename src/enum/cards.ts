import { toSelect } from '@/utils/enum-utils';
import { RadioOptions } from '@core/components/app-inputs';

export enum CardType {
  POKEMON = 'POKEMON',
  ITEM_FOSSIL = 'ITEM_FOSSIL',
  SUPPORTER = 'SUPPORTER',
  ITEM = 'ITEM',
  POKEMON_TOOL = 'POKEMON_TOOL',
}

export const cardTypeOptions = toSelect<RadioOptions>(CardType);
