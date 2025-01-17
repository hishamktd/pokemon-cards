'use server';

import { prisma } from '@/lib/db';
import { createPacksSchema } from '@/schema/masters/packs';
import { PacksForm } from '@/types/masters/packs';

const updatePack = async (id: number, data: PacksForm) => {
  const parsedData = createPacksSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      status: 400,
      success: false,
      error: parsedData.error.message,
      zodError: parsedData.error,
    };
  }

  try {
    await prisma.packs.update({
      where: { id },
      data: parsedData.data,
    });
    return { success: true, status: 200 };
  } catch (error) {
    console.error('Error updating pack:', error);
    return { success: false, error: (error as Error).message };
  }
};

export default updatePack;
