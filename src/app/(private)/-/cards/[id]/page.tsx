import React, { FC, memo, use } from 'react';

import ManageCards from '@/views/cards/ManageCards';

type Props = {
  params: Promise<{ id: string }>;
};

const UpdateCards: FC<Props> = ({ params }) => {
  const { id } = use(params);

  return <ManageCards id={+id} />;
};

export default memo(UpdateCards);
