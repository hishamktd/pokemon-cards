import React, { FC, memo } from 'react';

import { AppDrawer } from '@core/components/app-drawer';

type Props = {
  open: boolean;
  id?: number;
  onClose: () => void;
};

const getDrawerTitle = (id?: number) => {
  if (id) return 'Edit Pack';
  return 'Add Pack';
};

const PacksDrawer: FC<Props> = ({ open, id, onClose }) => {
  return (
    <AppDrawer open={open} title={getDrawerTitle(id)} onClose={onClose}>
      <div>Content</div>
    </AppDrawer>
  );
};

export default memo(PacksDrawer);
