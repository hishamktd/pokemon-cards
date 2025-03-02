import { toSelect } from '@/utils/enum-utils';
import { RadioOptions } from '@core/components/app-inputs';

export enum Stage {
  BASIC = 'BASIC',
  STAGE_1 = 'STAGE_1',
  STAGE_2 = 'STAGE_2',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  UNKNOWN = 'UNKNOWN',
}

export const stageOptions = toSelect(Stage);
export const genderOptions = toSelect<RadioOptions>(Gender);
