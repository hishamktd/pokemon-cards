'use server';

import { prisma } from '@/lib/db';
import uploadFile from '@/lib/file-upload';
import { updatePacksSchema } from '@/schema/masters/packs';
import { PacksUpdateForm } from '@/types/masters/packs';

const updatePack = async (data: PacksUpdateForm) => {
  const parsedData = updatePacksSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      status: 400,
      success: false,
      error: parsedData.error.message,
      zodError: parsedData.error,
    };
  }

  const {
    data: { id, name, thumbnail, totalCards, thumbnailUrl },
  } = parsedData;

  const imageUrl = await uploadFile(thumbnail, {
    path: 'packs',
    imageUrl: thumbnailUrl,
    name: name,
  });

  try {
    await prisma.packs.update({
      where: { id },
      data: { name, thumbnail: imageUrl, totalCards },
    });
    return { success: true, status: 200 };
  } catch (error) {
    console.error('Error updating pack:', error);
    return { success: false, error: (error as Error).message };
  }
};

export default updatePack;
