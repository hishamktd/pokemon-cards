import { ComponentsProps, MuiComponents } from '../types';
import button from './button';
import card from './card';

const components = (props: ComponentsProps): MuiComponents => ({
  MuiButton: button(props),
  MuiCard: card(props),
});

export default components;
