'use client';

import { Card, Grid2 } from '@mui/material';
import React, { FC, memo } from 'react';

import { useForm } from 'react-hook-form';

import { useGetCardQuery } from '@/api/cards/cards.api';
import { useGetAllExpansionsQuery } from '@/api/masters/expansion.api';
import {
  FileUploadController,
  SelectController,
  TextFieldController,
} from '@/components/field-controller';
import Page from '@/components/page';
import { cardsDefaultValues } from '@/constants/cards';
import { CardsSchema } from '@/schema/cards';
import { TId } from '@/types';
import { CardsForm } from '@/types/cards';
import resolver from '@/utils/resolver';
import { AppFormRow } from '@core/components/app-form-helper';
import { ActionTitle } from '@core/components/app-title';

type Props = {
  id: TId;
};

const getPageTitle = (id: TId) => {
  if (id) return 'Edit Card';
  return 'Add Card';
};

const ManageCards: FC<Props> = ({ id }) => {
  const { data: card } = useGetCardQuery(id);
  const { data: expansions } = useGetAllExpansionsQuery();

  const { control } = useForm<CardsForm>({
    defaultValues: cardsDefaultValues,
    resolver: resolver(CardsSchema),
  });

  return (
    <Page>
      <ActionTitle title={getPageTitle(id)} />
      <Grid2 container spacing={1}>
        <Grid2>
          <Card sx={{ p: 2 }}>
            <FileUploadController
              name="image"
              control={control}
              imageUrl={card?.imageUrl}
              cropWidth={286}
              cropHeight={400}
              isRequired
            />
          </Card>
        </Grid2>
        <Grid2 container spacing={1} flexDirection="column" size={'grow'}>
          <Grid2>
            <Card sx={{ p: 2, width: '100%', overflow: 'visible' }}>
              <AppFormRow
                fields={[
                  {
                    size: 6,
                    component: (
                      <TextFieldController
                        name="name"
                        control={control}
                        isRequired
                        label="Name (auto fill)"
                        slotProps={{
                          input: { readOnly: true },
                        }}
                      />
                    ),
                  },
                  {
                    size: 6,
                    component: (
                      <SelectController
                        name="expansion"
                        control={control}
                        label="Expansion"
                        options={expansions}
                        isRequired
                      />
                    ),
                  },
                  {
                    size: 12,
                    component: (
                      <TextFieldController
                        name="description"
                        control={control}
                        label="Description"
                        rows={3}
                      />
                    ),
                  },
                ]}
              />
            </Card>
          </Grid2>
          <Grid2></Grid2>
        </Grid2>
      </Grid2>
    </Page>
  );
};

export default memo(ManageCards);
