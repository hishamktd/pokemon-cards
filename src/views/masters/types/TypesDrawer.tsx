import { Stack } from '@mui/material';
import React, { FC, memo, useCallback, useEffect, useMemo } from 'react';

import { useForm } from 'react-hook-form';

import {
  useCreateTypeMutation,
  useGetTypeQuery,
  useUpdateTypeMutation,
} from '@/api/masters/types.api';
import {
  FileUploadController,
  TextFieldController,
} from '@/components/field-controller';
import { typesDefaultValues } from '@/constants/masters/types';
import { typesSchema } from '@/schema/masters/types';
import { TId } from '@/types';
import { TypesForm } from '@/types/masters/types';
import { isValidUrl } from '@/utils/common';
import resolver from '@/utils/resolver';
import { AppDrawer } from '@core/components/app-drawer';
import useFileUpload from '@core/hooks/use-file-upload';

type Props = {
  open: boolean;
  id: TId;
  onClose: () => void;
  refetchTypes?: () => void;
};

const getDrawerTitle = (id: TId) => {
  if (id) return 'Edit Types';
  return 'Add Types';
};

const TypesDrawer: FC<Props> = ({ id, onClose, open, refetchTypes }) => {
  const [createType, { isLoading: isCreating, isSuccess: isCreated }] =
    useCreateTypeMutation();
  const [updateType, { isLoading: isUpdating, isSuccess: isUpdated }] =
    useUpdateTypeMutation();
  const { data: type, refetch: refetchType, isFetching } = useGetTypeQuery(id);

  const { upload, fileUploading } = useFileUpload({
    path: 'types',
  });

  const { control, handleSubmit, reset, setError } = useForm<TypesForm>({
    defaultValues: typesDefaultValues,
    resolver: resolver(typesSchema),
  });

  const buttonLoading = useMemo(() => {
    return isCreating || isUpdating || fileUploading;
  }, [isCreating, isUpdating, fileUploading]);

  const onSubmit = useCallback(
    async ({ icon, ...data }: TypesForm) => {
      const iconUrl = await upload(icon, type?.iconUrl, data.name);

      if (!iconUrl) {
        setError('icon', { message: 'Icon is required' });
        return;
      }

      const finalData = { ...data, iconUrl };

      if (id) {
        await updateType({ ...finalData, id });
      } else {
        await createType(finalData);
      }

      onClose();
    },
    [createType, id, onClose, setError, type?.iconUrl, updateType, upload],
  );

  const handleReset = useCallback(() => {
    if (type && id) {
      const iconUrl = isValidUrl(type.iconUrl) ? type.iconUrl : '';
      reset({ ...type, iconUrl });
    } else {
      reset(typesDefaultValues);
    }
  }, [id, reset, type]);

  useEffect(() => {
    if (open) {
      handleReset();
    }
  }, [handleReset, open]);

  useEffect(() => {
    if (open) {
      refetchType();
    }
  }, [open, refetchType]);

  useEffect(() => {
    if (refetchTypes && (isCreated || isUpdated)) {
      refetchTypes();
    }
  }, [isCreated, isUpdated, refetchTypes]);

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
        <TextFieldController<TypesForm>
          name="name"
          control={control}
          label="Name"
        />
        <TextFieldController<TypesForm>
          name="color"
          control={control}
          label="Color"
          type="color"
        />
        <FileUploadController<TypesForm>
          name="icon"
          control={control}
          imageUrl={type?.iconUrl}
          cropWidth={350}
          cropHeight={350}
        />
      </Stack>
    </AppDrawer>
  );
};

export default memo(TypesDrawer);
