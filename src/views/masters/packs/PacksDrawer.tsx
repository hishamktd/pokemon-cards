import { Stack } from '@mui/material';
import React, { FC, memo, useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import {
  FileUploadController,
  NumberFieldController,
  TextFieldController,
} from '@/components/field-controller';
import { packsDefaultValues } from '@/constants/masters/packs';
import usePacksStore from '@/store/masters/packs';
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
  const { updating, entity, createPacks, fetchPack, cleanEntity } =
    usePacksStore();
  const { control, handleSubmit, reset } = useForm<PacksForm>({
    defaultValues: packsDefaultValues,
  });

  const onSubmit = useCallback(
    (data: PacksForm) => {
      createPacks(data);
      cleanEntity();
      onClose();
    },
    [cleanEntity, createPacks, onClose],
  );

  const handleReset = useCallback(() => {
    if (entity && id) {
      reset(entity);
    } else {
      reset(packsDefaultValues);
    }
  }, [entity, id, reset]);

  useEffect(() => {
    if (open) {
      handleReset();
    }
  }, [handleReset, open]);

  useEffect(() => {
    if (id) {
      fetchPack(id);
    }
  }, [fetchPack, id]);

  return (
    <AppDrawer
      open={open}
      title={getDrawerTitle(id)}
      onSave={handleSubmit(onSubmit)}
      onClose={onClose}
      filledButtonProps={{ loading: updating }}
      outlineButtonProps={{ loading: updating }}
    >
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
        <FileUploadController<PacksForm> name="thumbnail" control={control} />
      </Stack>
    </AppDrawer>
  );
};

export default memo(PacksDrawer);
