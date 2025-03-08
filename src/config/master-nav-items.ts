import routes from '@/constants/common/routes';
import { ICONS } from '@/lib/icons/icons-const';
import { NavItem } from '@core/layout/side-bar/types';

const { PACK, POKEBALL_ICON } = ICONS;
const { TYPES, EXPANSIONS } = routes;

const masterNavItems: NavItem[] = [
  { path: EXPANSIONS, label: 'Expansions', icon: PACK },
  { path: TYPES, label: 'Types', icon: POKEBALL_ICON },
];

export default masterNavItems;
