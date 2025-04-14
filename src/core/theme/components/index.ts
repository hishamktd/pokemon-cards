import { ComponentsProps, MuiComponents } from '../types';
import button from './button';
import card from './card';
import formLabel from './form-label';
import typography from './typography';

const components = (props: ComponentsProps): MuiComponents => ({
  MuiButton: button(props),
  MuiCard: card(props),
  MuiTypography: typography(props),
  MuiFormLabel: formLabel(props),
});

export default components;
