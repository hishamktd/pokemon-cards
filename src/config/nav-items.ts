import { NavItem } from '@core/layout/side-bar/types';

import { ICONS } from '@/constants/icons';
import navigation from '@/constants/navigation';

const { DASHBOARD, STAGE, ATTACK, COMPONENTS } = ICONS;
const { dashboard, attacks, prototypes, stages } = navigation;

const navItems: NavItem[] = [
  { ...dashboard, icon: DASHBOARD },
  { ...stages, icon: STAGE },
  { ...attacks, icon: ATTACK },
  { ...prototypes, icon: COMPONENTS },
];

export default navItems;
