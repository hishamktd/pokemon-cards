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
import { KeyActionEnum } from '@/enum/key-actions';
import { expansionSchema } from '@/schema/masters/expansion';
import { TId } from '@/types';
import { ExpansionForm } from '@/types/masters/expansion';
import { isValidUrl } from '@/utils/common';
import resolver from '@/utils/resolver';
import { AppDrawer } from '@core/components/app-drawer';
import useFileUpload from '@core/hooks/use-file-upload';

type Props = {
  open: boolean;
  id: TId;
  onClose: () => void;
  refetchExpansions?: () => void;
};

const getDrawerTitle = (id: TId) => {
  if (id) return 'Edit Expansion';
  return 'Add Expansion';
};

const ExpansionDrawer: FC<Props> = ({
  open,
  id,
  onClose,
  refetchExpansions,
}) => {
  const [createExpansion, { isLoading: isCreating, isSuccess: isCreated }] =
    useCreateExpansionMutation();
  const [updateExpansion, { isLoading: isUpdating, isSuccess: isUpdated }] =
    useUpdateExpansionMutation();
  const {
    data: expansion,
    refetch: refetchExpansion,
    isFetching: isFetchingExpansion,
  } = useGetExpansionQuery(id);

  const { upload, fileUploading } = useFileUpload({
    path: 'expansions',
  });

  const { control, handleSubmit, reset } = useForm<ExpansionForm>({
    defaultValues: expansionDefaultValues,
    resolver: resolver(expansionSchema),
  });

  const buttonLoading = useMemo(() => {
    return isCreating || isUpdating || fileUploading;
  }, [isCreating, isUpdating, fileUploading]);

  const onSubmit = useCallback(
    async ({ image, ...data }: ExpansionForm) => {
      const imageUrl = await upload(image, expansion?.imageUrl, data.name);

      const finalData = { ...data, imageUrl };

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
      const imageUrl = isValidUrl(expansion.imageUrl)
        ? expansion.imageUrl
        : null;
      reset({ ...expansion, imageUrl });
    } else {
      reset(expansionDefaultValues);
    }
  }, [expansion, id, reset]);

  useEffect(() => {
    if (open) {
      handleReset();
    }
  }, [handleReset, open]);

  useEffect(() => {
    if (open) {
      refetchExpansion();
    }
  }, [open, refetchExpansion]);

  useEffect(() => {
    if (refetchExpansions && (isCreated || isUpdated)) {
      refetchExpansions();
    }
  }, [isCreated, isUpdated, refetchExpansions]);

  return (
    <AppDrawer
      open={open}
      title={getDrawerTitle(id)}
      onSave={handleSubmit(onSubmit)}
      onClose={onClose}
      filledButtonProps={{ loading: buttonLoading, keyFor: KeyActionEnum.SAVE }}
      outlineButtonProps={{ loading: buttonLoading }}
      loading={isFetchingExpansion}
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
        <TextFieldController<ExpansionForm>
          name="points"
          control={control}
          label="Points"
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
