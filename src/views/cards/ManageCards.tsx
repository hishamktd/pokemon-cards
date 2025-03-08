'use client';

import { Card, Grid2 } from '@mui/material';
import React, { FC, memo, useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { useGetCardQuery } from '@/api/cards/cards.api';
import { useGetAllExpansionsQuery } from '@/api/masters/expansion.api';
import {
  FileUploadController,
  RadioController,
  SelectController,
  TextFieldController,
} from '@/components/field-controller';
import Page from '@/components/page';
import { cardsDefaultValues, pokemonCardTypeDValues } from '@/constants/cards';
import { CardType, cardTypeOptions } from '@/enum/cards';
import { ICONS } from '@/lib/icons/icons-const';
import { CardsSchema } from '@/schema/cards';
import styles from '@/styles/common';
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

const { POKEMON } = CardType;

const ManageCards: FC<Props> = ({ id }) => {
  const { data: card } = useGetCardQuery(id);
  const { data: expansions } = useGetAllExpansionsQuery();

  const { control, reset, watch } = useForm<CardsForm>({
    defaultValues: cardsDefaultValues,
    resolver: resolver(CardsSchema),
  });

  const cardType = watch('cardType');

  const handleReset = useCallback(() => {
    if (id) {
      reset(card);
    } else {
      reset(cardsDefaultValues);
    }
  }, [card, id, reset]);

  const resetBasedOnCardType = useCallback(() => {
    if (cardType !== POKEMON) {
      reset((prev) => ({
        ...prev,
        ...pokemonCardTypeDValues,
      }));
    }
  }, [cardType, reset]);

  useEffect(() => {
    handleReset();
  }, [handleReset]);

  useEffect(() => {
    resetBasedOnCardType();
  }, [resetBasedOnCardType]);

  return (
    <Page component="form">
      <ActionTitle
        title={getPageTitle(id)}
        buttonGroupProps={{
          outlinedButtonProps: { isHidden: false },
          containedButtonProps: {},
          resetButton: {
            iconButtonProps: {
              icon: ICONS.RESET_ICON,
              color: 'primary',
              variant: 'outlined',
              shape: 'square',
              sx: styles.resetIconStyle,
              onClick: handleReset,
            },
          },
        }}
      />
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
                  {
                    size: 12,
                    component: (
                      <RadioController
                        name="cardType"
                        control={control}
                        label="Card Type"
                        options={cardTypeOptions}
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
