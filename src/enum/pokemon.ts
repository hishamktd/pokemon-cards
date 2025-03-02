import { toSelect } from '@/utils/enum-utils';

export enum Stage {
  BASIC = 'BASIC',
  STAGE_1 = 'STAGE_1',
  STAGE_2 = 'STAGE_2',
}

export const stageOptions = toSelect(Stage);
