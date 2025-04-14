import { Components, Theme } from '@mui/material';

import { Settings } from '@/config/settings';

export type MuiComponents = Components<Omit<Theme, 'components'>>;

export type MuiButton = MuiComponents['MuiButton'];
export type MuiCard = MuiComponents['MuiCard'];
export type MuiTypography = MuiComponents['MuiTypography'];
export type MuiFormLabel = MuiComponents['MuiFormLabel'];

export type ComponentsProps = {
  theme: Theme;
  settings: Settings;
};
