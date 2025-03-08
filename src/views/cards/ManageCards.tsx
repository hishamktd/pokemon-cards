import React, { FC, memo } from 'react';

import { TId } from '@/types';

type Props = {
  id: TId;
};

const ManageCards: FC<Props> = ({ id }) => {
  return <>{id}</>;
};

export default memo(ManageCards);
