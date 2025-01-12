import React, { memo } from 'react';

import Page from '@/components/page';
import { ActionTitle } from '@core/components/app-title';

const Packs = () => {
  return (
    <Page>
      <ActionTitle
        title="Packs"
        variant="small"
        buttonGroupProps={{ containedButtonProps: { label: 'Create' } }}
      />
    </Page>
  );
};

export default memo(Packs);
