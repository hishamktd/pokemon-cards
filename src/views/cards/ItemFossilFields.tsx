import React, { FC, memo } from 'react';

import { Control } from 'react-hook-form';

import { useGetAllPokemonsQuery } from '@/api/pokemon/pokemon.api';
import { SelectController } from '@/components/field-controller';
import { CardsForm } from '@/types/cards';
import { AppFormRow } from '@core/components/app-form-helper';

type Props = {
  control: Control<CardsForm>;
};

const ItemFossilFields: FC<Props> = ({ control }) => {
  const { data: pokemons } = useGetAllPokemonsQuery({});

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
      ]}
    />
  );
};

export default memo(ItemFossilFields);
