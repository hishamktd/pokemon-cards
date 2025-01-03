import { styled, Typography } from '@mui/material';

import styles from '@/constants/styles';

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  transition: styles.transition.modeTransition,
}));
