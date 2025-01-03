import { Button, styled } from '@mui/material';

export const LoadingButton = styled(Button)({
  position: 'relative',

  ['& .content']: {
    visibility: 'hidden',
  },

  ['& .icon']: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});
