import { Stack } from '@mui/material';
import React, { FC, memo } from 'react';

import { useForm } from 'react-hook-form';

import {
  NumberFieldController,
  TextFieldController,
} from '@/components/field-controller';
import { packsDefaultValues } from '@/constants/masters/packs';
import { PacksForm } from '@/types/masters/packs';
import { AppDrawer } from '@core/components/app-drawer';

type Props = {
  open: boolean;
  id?: number;
  onClose: () => void;
};

const getDrawerTitle = (id?: number) => {
  if (id) return 'Edit Pack';
  return 'Add Pack';
};

const PacksDrawer: FC<Props> = ({ open, id, onClose }) => {
  const { control } = useForm<PacksForm>({ defaultValues: packsDefaultValues });

  return (
    <AppDrawer open={open} title={getDrawerTitle(id)} onClose={onClose}>
      <Stack gap={2}>
        <TextFieldController<PacksForm>
          name="name"
          control={control}
          label="Name"
        />
        <NumberFieldController<PacksForm>
          name="totalCards"
          control={control}
          label="Total Cards"
        />
      </Stack>
    </AppDrawer>
  );
};

export default memo(PacksDrawer);
