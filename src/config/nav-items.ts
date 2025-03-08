import routes from '@/constants/common/routes';
import { ICONS } from '@/lib/icons/icons-const';
import { NavItem } from '@core/layout/side-bar/types';

import masterNavItems from './master-nav-items';
import prototypesNavItems from './prototype-nav-items';

const {
  DASHBOARD_ICON,
  STAGES_ICON,
  ATTACKS_ICON,
  COMPONENTS,
  MASTER,
  POKEMON_ICON,
  CARDS_ICON,
} = ICONS;

const {
  DASHBOARD,
  STAGES,
  ATTACKS,
  PROTOTYPES_ROOT,
  MASTER_ROOT,
  POKEMON,
  CARDS,
} = routes;

const navItems: NavItem[] = [
  {
    path: DASHBOARD,
    label: 'Dashboard',
    icon: DASHBOARD_ICON,
  },
  { path: STAGES, label: 'Stages', icon: STAGES_ICON },
  { path: ATTACKS, label: 'Attacks', icon: ATTACKS_ICON },
  {
    path: PROTOTYPES_ROOT,
    label: 'Prototypes',
    icon: COMPONENTS,
    children: prototypesNavItems,
  },
  { path: CARDS, label: 'Cards', icon: CARDS_ICON },
  { path: POKEMON, label: 'Pokemon', icon: POKEMON_ICON },
  {
    path: MASTER_ROOT,
    label: 'Master',
    icon: MASTER,
    children: masterNavItems,
  },
];

export default navItems;
