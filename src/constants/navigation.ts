import { NavItem } from '@core/layout/side-bar/types';

import { ICONS } from './icons';

const { DASHBOARD, STAGE, ATTACK, COMPONENTS } = ICONS;

const navigation: NavItem[] = [
  { path: '/dashboard', label: 'Dashboard', icon: DASHBOARD },
  { path: '/stages', label: 'Stages', icon: STAGE },
  { path: '/attacks', label: 'Attacks', icon: ATTACK },
  { path: '/prototypes', label: 'Prototypes', icon: COMPONENTS },
];

export default navigation;
