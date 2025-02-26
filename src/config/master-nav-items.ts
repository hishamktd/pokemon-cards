import routes from '@/constants/common/routes';
import { ICONS } from '@/lib/icons/icons-const';
import { NavItem } from '@core/layout/side-bar/types';

const { PACK } = ICONS;
const { PACKS } = routes;

const masterNavItems: NavItem[] = [
  { path: PACKS, label: 'Expansions', icon: PACK },
];

export default masterNavItems;
