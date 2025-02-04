import { ICONS } from '@/constants/common/icons';
import navigation from '@/constants/common/navigation';
import { NavItem } from '@core/layout/side-bar/types';

const { DASHBOARD, STAGE, ATTACK, COMPONENTS, MASTER } = ICONS;
const { dashboard, attacks, prototypes, stages, master } = navigation;

const navItems: NavItem[] = [
  { ...dashboard, icon: DASHBOARD },
  { ...stages, icon: STAGE },
  { ...attacks, icon: ATTACK },
  { ...prototypes, icon: COMPONENTS },
  { ...master, icon: MASTER },
];

export default navItems;
