import { Stack } from '@mui/material';
import React, { FC, memo, useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import {
  useCreateExpansionMutation,
  useGetExpansionQuery,
  useUpdateExpansionMutation,
} from '@/api/masters/expansion.api';
import {
  FileUploadController,
  NumberFieldController,
  TextFieldController,
} from '@/components/field-controller';
import { expansionDefaultValues } from '@/constants/masters/expansion';
import { createExpansionSchema } from '@/schema/masters/expansion';
import { ExpansionForm } from '@/types/masters/expansion';
import resolver from '@/utils/resolver';
import { AppDrawer } from '@core/components/app-drawer';

type Props = {
  open: boolean;
  id?: number;
  onClose: () => void;
};

const getDrawerTitle = (id?: number) => {
  if (id) return 'Edit Expansion';
  return 'Add Expansion';
};

const ExpansionDrawer: FC<Props> = ({ open, id, onClose }) => {
  const [createExpansion, { isLoading: isCreating }] =
    useCreateExpansionMutation();
  const [updateExpansion, { isLoading: isUpdating }] =
    useUpdateExpansionMutation();
  const { data: expansion, isLoading } = useGetExpansionQuery(id);

  const { control, handleSubmit, reset } = useForm<ExpansionForm>({
    defaultValues: expansionDefaultValues,
    resolver: resolver(createExpansionSchema),
  });

  const onSubmit = useCallback(
    async (data: ExpansionForm) => {
      if (id) {
        await updateExpansion({ ...data, id });
      } else {
        await createExpansion(data);
      }

      onClose();
    },
    [createExpansion, id, onClose, updateExpansion],
  );

  const handleReset = useCallback(() => {
    if (expansion && id) {
      reset(expansion);
    } else {
      reset(expansionDefaultValues);
    }
  }, [expansion, id, reset]);

  useEffect(() => {
    if (open) {
      handleReset();
    }
  }, [handleReset, open]);

  return (
    <AppDrawer
      open={open}
      title={getDrawerTitle(id)}
      onSave={handleSubmit(onSubmit)}
      onClose={onClose}
      filledButtonProps={{ loading: isCreating || isUpdating }}
      outlineButtonProps={{ loading: isCreating || isUpdating }}
      loading={isLoading}
    >
      <Stack gap={2}>
        <TextFieldController<ExpansionForm>
          name="name"
          control={control}
          label="Name"
        />
        <NumberFieldController<ExpansionForm>
          name="totalCards"
          control={control}
          label="Total Cards"
        />
        <FileUploadController<ExpansionForm>
          name="image"
          control={control}
          imageUrl={expansion?.imageUrl}
          cropWidth={400}
        />
      </Stack>
    </AppDrawer>
  );
};

export default memo(ExpansionDrawer);
