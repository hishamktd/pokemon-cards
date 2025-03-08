import React, { FC, memo } from 'react';

import Page from '@/components/page';
import { TId } from '@/types';

type Props = {
  id: TId;
};

const ManageCards: FC<Props> = ({ id }) => {
  return <Page>{id}</Page>;
};

export default memo(ManageCards);
