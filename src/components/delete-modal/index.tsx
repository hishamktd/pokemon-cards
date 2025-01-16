import { Box, Modal, Typography } from '@mui/material';
import React, { FC, memo } from 'react';

import { DeleteItem } from '@/types';
import ButtonGroup from '@core/components/app-button/ButtonGroup';

type Props = {
  onClose: () => void;
  itemToDelete: DeleteItem;
};

const DeleteModal: FC<Props> = ({ onClose, itemToDelete }) => {
  return (
    <Modal
      open={Boolean(itemToDelete)}
      onClose={onClose}
      aria-labelledby="delete-modal-title"
      aria-describedby="delete-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
        }}
      >
        <Typography id="delete-modal-title" variant="h6" component="h2">
          Confirm Deletion
        </Typography>
        <Typography id="delete-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete this item{' ' + itemToDelete?.name}?
          This action cannot be undone.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            mt: 3,
          }}
        >
          <ButtonGroup
            outlinedButtonProps={{ isHidden: false, onClick: onClose }}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default memo(DeleteModal);
