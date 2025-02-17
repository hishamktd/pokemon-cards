import { Stack } from '@mui/material';
import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';

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
import { TId } from '@/types';
import { ExpansionForm } from '@/types/masters/expansion';
import resolver from '@/utils/resolver';
import { AppDrawer } from '@core/components/app-drawer';
import useFileUpload from '@core/hooks/use-file-upload';

type Props = {
  open: boolean;
  id: TId;
  onClose: () => void;
};

const getDrawerTitle = (id: TId) => {
  if (id) return 'Edit Expansion';
  return 'Add Expansion';
};

const ExpansionDrawer: FC<Props> = ({ open, id, onClose }) => {
  const [createExpansion, { isLoading: isCreating }] =
    useCreateExpansionMutation();
  const [updateExpansion, { isLoading: isUpdating }] =
    useUpdateExpansionMutation();
  const { data: expansion, isLoading } = useGetExpansionQuery(id);

  const { upload, fileUploading } = useFileUpload({
    path: 'expansions',
  });

  const { control, handleSubmit, reset } = useForm<ExpansionForm>({
    defaultValues: expansionDefaultValues,
    resolver: resolver(createExpansionSchema),
  });

  const buttonLoading = useMemo(() => {
    return isCreating || isUpdating || fileUploading;
  }, [isCreating, isUpdating, fileUploading]);

  const onSubmit = useCallback(
    async (data: ExpansionForm) => {
      const image = await upload(data.image, expansion?.imageUrl, data.name);

      const finalData = { ...data, imageUrl: image };

      if (id) {
        await updateExpansion({ ...finalData, id });
      } else {
        await createExpansion(finalData);
      }

      onClose();
    },
    [
      createExpansion,
      expansion?.imageUrl,
      id,
      onClose,
      updateExpansion,
      upload,
    ],
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
      filledButtonProps={{ loading: buttonLoading }}
      outlineButtonProps={{ loading: buttonLoading }}
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
