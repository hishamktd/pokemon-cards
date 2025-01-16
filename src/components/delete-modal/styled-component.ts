import { Modal, styled } from '@mui/material';

export const StyledModal = styled(Modal)(({ theme }) => ({
  ['& .delete-modal']: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 430,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[24],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    textAlign: 'center',

    ['& .warning-icon']: {
      color: `${theme.palette.primary.main} !important`,
      fontSize: '100px',
    },

    ['& .title']: {
      color: theme.palette.common.black,
    },

    ['& .description']: {
      color: theme.palette.common.black,
    },

    ['& .button-group']: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
  },
}));
