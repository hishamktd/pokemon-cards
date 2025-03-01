import { Stack } from '@mui/material';
import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';

import { useForm } from 'react-hook-form';

import { useGetAllTypesQuery } from '@/api/masters/types.api';
import {
  useCreatePokemonMutation,
  useGetPokemonQuery,
  useUpdatePokemonMutation,
} from '@/api/pokemon/pokemon.api';
import {
  FileUploadController,
  TextFieldController,
} from '@/components/field-controller';
import SelectController from '@/components/field-controller/SelectController';
import { pokemonDefaultValues } from '@/constants/pokemon';
import { pokemonSchema } from '@/schema/pokemon';
import { GetAllType, TId } from '@/types';
import { PokemonForm } from '@/types/pokemon';
import { isValidUrl } from '@/utils/common';
import resolver from '@/utils/resolver';
import { AppDrawer } from '@core/components/app-drawer';
import useFileUpload from '@core/hooks/use-file-upload';

type Props = {
  open: boolean;
  id: TId;
  onClose: () => void;
  refetchPokemons?: () => void;
};

const getDrawerTitle = (id: TId) => {
  if (id) return 'Edit Pokemon';
  return 'Add Pokemon';
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

  const { control, handleSubmit, reset, setError } = useForm<PokemonForm>({
    defaultValues: pokemonDefaultValues,
    resolver: resolver(pokemonSchema),
  });

  const buttonLoading = useMemo(() => {
    return isCreating || isUpdating || fileUploading;
  }, [isCreating, isUpdating, fileUploading]);

  const onSubmit = useCallback(
    async ({ image, type, ...data }: PokemonForm) => {
      const imageUrl = await upload(image, pokemon?.imageUrl, data.name);

      if (!type?.id) {
        setError('type', { message: 'Type is required' });
        return;
      }

      const finalData = { ...data, imageUrl, typeId: type?.id };

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
      reset({ ...pokemon, imageUrl });
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

  return (
    <AppDrawer
      open={open}
      title={getDrawerTitle(id)}
      onSave={handleSubmit(onSubmit)}
      onClose={onClose}
      filledButtonProps={{ loading: buttonLoading }}
      outlineButtonProps={{ loading: buttonLoading }}
      loading={isFetching}
    >
      <Stack gap={2}>
        <TextFieldController<PokemonForm>
          name="name"
          control={control}
          label="Name"
        />
        <SelectController<PokemonForm, GetAllType>
          name="type"
          control={control}
          label="Type"
          options={types}
        />
        <FileUploadController<PokemonForm>
          name="image"
          control={control}
          imageUrl={pokemon?.imageUrl}
          cropWidth={100}
          cropHeight={100}
        />
      </Stack>
    </AppDrawer>
  );
};

export default memo(PokemonDrawer);
