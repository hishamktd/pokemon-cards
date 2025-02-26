import routes from '@/constants/common/routes';
import { NavItem } from '@core/layout/side-bar/types';

const {
  PROTOTYPES_BUTTONS,
  PROTOTYPES_TITLES,
  PROTOTYPES_BUTTON_GROUPS,
  PROTOTYPES_INPUTS,
  PROTOTYPES_TABLES,
  PROTOTYPES_DRAWER,
} = routes;

const prototypesNavItems: NavItem[] = [
  { path: PROTOTYPES_BUTTONS, label: 'Buttons' },
  { path: PROTOTYPES_TITLES, label: 'Titles' },
  { path: PROTOTYPES_BUTTON_GROUPS, label: 'Button Groups' },
  { path: PROTOTYPES_INPUTS, label: 'Inputs' },
  { path: PROTOTYPES_TABLES, label: 'Tables' },
  { path: PROTOTYPES_DRAWER, label: 'Drawer' },
];

export default prototypesNavItems;
