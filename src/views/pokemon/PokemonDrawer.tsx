import { Collapse, Grid2 } from '@mui/material';
import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';

import { useForm } from 'react-hook-form';

import { useGetAllTypesQuery } from '@/api/masters/types.api';
import {
  useCreatePokemonMutation,
  useGetAllPokemonsQuery,
  useGetPokemonQuery,
  useUpdatePokemonMutation,
} from '@/api/pokemon/pokemon.api';
import {
  FileUploadController,
  TextFieldController,
  SelectController,
  RadioController,
  SwitchController,
} from '@/components/field-controller';
import { pokemonDefaultValues } from '@/constants/pokemon';
import { Gender, genderOptions, Stage, stageOptions } from '@/enum/pokemon';
import { ICONS } from '@/lib/icons/icons-const';
import { pokemonSchema } from '@/schema/pokemon';
import styles from '@/styles/common';
import { NumStr, TId } from '@/types';
import { PokemonForm } from '@/types/pokemon';
import { isValidUrl } from '@/utils/common';
import { fromSelect } from '@/utils/enum-utils';
import resolver from '@/utils/resolver';
import { AppDrawer } from '@core/components/app-drawer';
import useFileUpload from '@core/hooks/use-file-upload';

type Props = {
  open: boolean;
  id: TId;
  onClose: () => void;
  refetchPokemons?: () => void;
};

const { BASIC, STAGE_1, STAGE_2 } = Stage;

const getDrawerTitle = (id: TId) => {
  if (id) return 'Edit Pokemon';
  return 'Add Pokemon';
};

const getPrevStage = (stage?: NumStr): Stage => {
  switch (stage) {
    case STAGE_1:
      return BASIC;
    case STAGE_2:
      return STAGE_1;
    default:
      return '' as Stage;
  }
};

const PokemonDrawer: FC<Props> = ({ id, onClose, open, refetchPokemons }) => {
  const [createPokemon, { isLoading: isCreating, isSuccess: isCreated }] =
    useCreatePokemonMutation();
  const [updatePokemon, { isLoading: isUpdating, isSuccess: isUpdated }] =
    useUpdatePokemonMutation();
  const {
    data: pokemon,
    refetch: refetchPokemon,
    isFetching,
  } = useGetPokemonQuery(id);
  const { data: types = [] } = useGetAllTypesQuery();

  const { upload, fileUploading } = useFileUpload({
    path: 'pokemon',
  });

  const { control, handleSubmit, reset, setError, watch, setValue } =
    useForm<PokemonForm>({
      defaultValues: pokemonDefaultValues,
      resolver: resolver(pokemonSchema),
    });

  const watchedStage = watch('stage');

  const { data: evolvedFromOptions = [], refetch: refetchAllPokemons } =
    useGetAllPokemonsQuery({ stage: getPrevStage(watchedStage?.id) });

  const isBaseStage = useMemo(() => {
    const isBasic = watchedStage?.id === Stage.BASIC;
    if (isBasic) {
      setValue('evolvedFrom', null);
    }
    return isBasic;
  }, [setValue, watchedStage?.id]);

  const buttonLoading = useMemo(() => {
    return isCreating || isUpdating || fileUploading;
  }, [isCreating, isUpdating, fileUploading]);

  const onSubmit = useCallback(
    async ({ image, type, stage, evolvedFrom, ...data }: PokemonForm) => {
      const imageUrl = await upload(image, pokemon?.imageUrl, data.name);

      if (!type?.id) {
        setError('type', { message: 'Type is required' });
        return;
      }

      if (stage?.id !== Stage.BASIC && !evolvedFrom?.id) {
        setError('evolvedFrom', { message: 'Evolved From is required' });
        return;
      }

      const finalData = {
        ...data,
        imageUrl,
        typeId: type?.id,
        stage: stage?.id as Stage,
        evolvedFromId: evolvedFrom?.id ?? null,
      };

      if (id) {
        await updatePokemon({ ...finalData, id });
      } else {
        await createPokemon(finalData);
      }

      onClose();
    },
    [
      upload,
      pokemon?.imageUrl,
      id,
      onClose,
      setError,
      updatePokemon,
      createPokemon,
    ],
  );

  const handleReset = useCallback(() => {
    if (pokemon && id) {
      const imageUrl = isValidUrl(pokemon.imageUrl) ? pokemon.imageUrl : '';
      reset({
        ...pokemon,
        gender: pokemon.gender || Gender.UNKNOWN,
        imageUrl,
        stage: fromSelect(pokemon.stage, stageOptions),
      });
    } else {
      reset(pokemonDefaultValues);
    }
  }, [id, reset, pokemon]);

  useEffect(() => {
    if (open) {
      handleReset();
    }
  }, [handleReset, open]);

  useEffect(() => {
    if (open) {
      refetchPokemon();
    }
  }, [open, refetchPokemon]);

  useEffect(() => {
    if (refetchPokemons && (isCreated || isUpdated)) {
      refetchPokemons();
    }
  }, [isCreated, isUpdated, refetchPokemons]);

  useEffect(() => {
    if (watchedStage?.id !== Stage.BASIC) {
      refetchAllPokemons();
    }
  }, [refetchAllPokemons, watchedStage?.id]);

  return (
    <AppDrawer
      open={open}
      title={getDrawerTitle(id)}
      onSave={handleSubmit(onSubmit)}
      onClose={onClose}
      filledButtonProps={{ loading: buttonLoading }}
      outlineButtonProps={{ loading: buttonLoading }}
      loading={isFetching}
      paperProps={{ sx: { width: 800 } }}
      buttonGroupProps={{
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
    >
      <Grid2 container spacing={3}>
        <Grid2 container size={6} spacing={2} direction="column">
          <TextFieldController name="name" control={control} label="Name" />
          <SelectController
            name="type"
            control={control}
            label="Type"
            options={types}
          />
          <RadioController
            name="gender"
            control={control}
            label="Gender"
            options={genderOptions}
          />
          <SelectController
            name="stage"
            control={control}
            label="Stage"
            options={stageOptions}
            isClearable={false}
          />
          <Collapse in={!isBaseStage}>
            <SelectController
              name="evolvedFrom"
              control={control}
              label="Evolved From"
              options={evolvedFromOptions}
              fullWidth
            />
          </Collapse>
          <SwitchController
            control={control}
            name="isFossil"
            label="Fossil"
            labelPlacement="start"
          />
        </Grid2>
        <Grid2 size={6}>
          <FileUploadController
            name="image"
            control={control}
            imageUrl={pokemon?.imageUrl}
            cropWidth={100}
            cropHeight={100}
          />
        </Grid2>
      </Grid2>
    </AppDrawer>
  );
};

export default memo(PokemonDrawer);
