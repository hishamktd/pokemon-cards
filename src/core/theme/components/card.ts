import colors from '@/utils/colors';

import { ComponentsProps, MuiCard } from '../types';

const card = ({ settings }: ComponentsProps): MuiCard => ({
  styleOverrides: {
    root: {
      backgroundColor:
        settings?.theme === 'dark'
          ? colors.dark.background.paper
          : colors.background.paper,
    },
  },
});

export default card;
