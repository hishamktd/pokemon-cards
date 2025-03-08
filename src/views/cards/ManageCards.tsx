'use client';

import { Card, Grid2 } from '@mui/material';
import React, { FC, memo } from 'react';

import { useForm } from 'react-hook-form';

import { useGetCardQuery } from '@/api/cards/cards.api';
import { FileUploadController } from '@/components/field-controller';
import Page from '@/components/page';
import { cardsDefaultValues } from '@/constants/cards';
import { CardsSchema } from '@/schema/cards';
import { TId } from '@/types';
import resolver from '@/utils/resolver';

type Props = {
  id: TId;
};

const ManageCards: FC<Props> = ({ id }) => {
  const { data: card } = useGetCardQuery(id);

  const { control } = useForm({
    defaultValues: cardsDefaultValues,
    resolver: resolver(CardsSchema),
  });

  return (
    <Page>
      <Grid2 container spacing={3}>
        <Grid2 size={4}>
          <Card sx={{ p: 2 }}>
            <FileUploadController
              name="image"
              control={control}
              imageUrl={card?.imageUrl}
              cropWidth={358}
              cropHeight={500}
            />
          </Card>
        </Grid2>
        <Grid2 size={7} container spacing={3} flexDirection="column">
          <Grid2></Grid2>
          <Grid2></Grid2>
        </Grid2>
      </Grid2>
    </Page>
  );
};

export default memo(ManageCards);
