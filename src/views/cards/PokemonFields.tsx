import React, { FC, memo, useEffect } from 'react';

import { Control, UseFormSetValue, useWatch } from 'react-hook-form';

import { useGetAllTypesQuery } from '@/api/masters/types.api';
import { useGetAllPokemonsQuery } from '@/api/pokemon/pokemon.api';
import {
  SelectController,
  SwitchController,
} from '@/components/field-controller';
import { CardsForm } from '@/types/cards';
import { AppFormRow } from '@core/components/app-form-helper';

type Props = {
  control: Control<CardsForm>;
  setValue: UseFormSetValue<CardsForm>;
};

const PokemonFields: FC<Props> = ({ control, setValue }) => {
  const { data: pokemons } = useGetAllPokemonsQuery({});
  const { data: types } = useGetAllTypesQuery();

  const pokemon = useWatch({ control, name: 'pokemon' });

  useEffect(() => {
    if (pokemon) {
      setValue('type', pokemon.type);
      setValue('isFossil', pokemon.isFossil);
      setValue('name', pokemon.name);
    }
  }, [pokemon, setValue]);

  return (
    <AppFormRow
      fields={[
        {
          size: 6,
          component: (
            <SelectController
              name="pokemon"
              control={control}
              label="Pokemon"
              options={pokemons}
            />
          ),
        },
        {
          size: 6,
          component: (
            <SelectController
              name="type"
              control={control}
              label="Types"
              options={types}
            />
          ),
        },
        {
          size: 6,
          component: (
            <SwitchController name="isEx" control={control} label="Ex" />
          ),
        },
        {
          size: 6,
          component: (
            <SwitchController
              name="isFossil"
              label="Fossil"
              control={control}
            />
          ),
        },
      ]}
    />
  );
};

export default memo(PokemonFields);
