'use client';

import { Card, Collapse, Grid2 } from '@mui/material';
import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import {
  useCreateCardMutation,
  useGetCardQuery,
  useUpdateCardMutation,
} from '@/api/cards/cards.api';
import { useGetAllExpansionsQuery } from '@/api/masters/expansion.api';
import {
  FileUploadController,
  RadioController,
  SelectController,
  TextFieldController,
} from '@/components/field-controller';
import Page from '@/components/page';
import {
  cardsDefaultValues,
  itemFossilCardTypeDValues,
  pokemonCardTypeDValues,
} from '@/constants/cards';
import { CardType, cardTypeOptions } from '@/enum/cards';
import { ICONS } from '@/lib/icons/icons-const';
import { CardsSchema } from '@/schema/cards';
import styles from '@/styles/common';
import { TId } from '@/types';
import { CardsForm } from '@/types/cards';
import resolver from '@/utils/resolver';
import { AppFormRow } from '@core/components/app-form-helper';
import { ActionTitle } from '@core/components/app-title';
import useFileUpload from '@core/hooks/use-file-upload';

import ItemFossilFields from './ItemFossilFields';
import PokemonFields from './PokemonFields';

type Props = {
  id: TId;
};

const getPageTitle = (id: TId) => {
  if (id) return 'Edit Card';
  return 'Add Card';
};

const { POKEMON, ITEM_FOSSIL } = CardType;

const ManageCards: FC<Props> = ({ id }) => {
  const { back } = useRouter();

  const { data: card } = useGetCardQuery(id);
  const { data: expansions } = useGetAllExpansionsQuery();
  const [createCard, { isLoading: isCreating, isSuccess: isCreated }] =
    useCreateCardMutation();

  const [updateCard, { isLoading: isUpdating, isSuccess: isUpdated }] =
    useUpdateCardMutation();

  const { upload, fileUploading } = useFileUpload({
    path: 'pokemon',
  });

  const { control, reset, watch, setValue, handleSubmit, setError } =
    useForm<CardsForm>({
      defaultValues: cardsDefaultValues,
      resolver: resolver(CardsSchema),
    });

  const cardType = watch('cardType');

  const buttonLoading = useMemo(() => {
    return isCreating || isUpdating || fileUploading;
  }, [isCreating, isUpdating, fileUploading]);

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
    if (cardType !== ITEM_FOSSIL) {
      reset((prev) => ({
        ...prev,
        ...itemFossilCardTypeDValues,
      }));
    }
  }, [cardType, reset]);

  const onSubmit = useCallback(
    async ({ thumbnail, pokemon, type, expansion, ...data }: CardsForm) => {
      const thumbnailUrl = await upload(
        thumbnail,
        card?.thumbnailUrl,
        data.name,
      );

      if (!thumbnailUrl) {
        setError('thumbnail', { message: 'Required' });
        return;
      }

      const finalData = {
        ...data,
        thumbnailUrl: thumbnailUrl,
        pokemonId: pokemon?.id ?? null,
        typeId: type?.id ?? null,
        expansionId: Number(expansion?.id),
      };
      console.log('finalData', finalData);

      if (id) {
        await updateCard({ ...finalData, id });
      } else {
        await createCard(finalData);
      }
    },
    [card?.thumbnailUrl, createCard, id, setError, updateCard, upload],
  );

  useEffect(() => {
    handleReset();
  }, [handleReset]);

  useEffect(() => {
    resetBasedOnCardType();
  }, [resetBasedOnCardType]);

  useEffect(() => {
    if (isCreated || isUpdated) {
      back();
    }
  }, [back, isCreated, isUpdated]);

  return (
    <Page component="form" onSubmit={handleSubmit(onSubmit)}>
      <ActionTitle
        title={getPageTitle(id)}
        buttonGroupProps={{
          outlinedButtonProps: {
            isHidden: false,
            loading: buttonLoading,
            onClick: back,
          },
          containedButtonProps: {
            loading: buttonLoading,
            type: 'submit',
          },
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
      <Grid2 container spacing={1} sx={{ height: '100%' }}>
        <Grid2>
          <Card sx={{ p: 2 }}>
            <FileUploadController
              name="thumbnail"
              control={control}
              imageUrl={card?.thumbnailUrl}
              cropWidth={286}
              cropHeight={400}
              isRequired
            />
          </Card>
        </Grid2>
        <Grid2 container spacing={1} flexDirection="column" size={'grow'}>
          <Grid2 size="auto">
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
          <Grid2 size="grow">
            <Card
              sx={{
                p: 2,
                width: '100%',
                overflow: 'visible',
              }}
            >
              <Collapse in={cardType === POKEMON}>
                <PokemonFields control={control} setValue={setValue} />
              </Collapse>
              <Collapse in={cardType === ITEM_FOSSIL}>
                <ItemFossilFields control={control} />
              </Collapse>
            </Card>
          </Grid2>
        </Grid2>
      </Grid2>
    </Page>
  );
};

export default memo(ManageCards);
