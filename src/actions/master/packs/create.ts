'use server';

import { prisma } from '@/lib/db';
import { createPacksSchema } from '@/schema/masters/packs';
import { PacksForm } from '@/types/masters/packs';

const createPacks = async (data: PacksForm) => {
  const parsedDate = createPacksSchema.safeParse(data);
  if (!parsedDate.success) {
    return {
      status: 400,
      success: false,
      error: parsedDate.error.message,
      message: 'Bad request',
    };
  }

  try {
    await prisma.packs.create({
      data: {
        name: parsedDate.data.name,
        totalCards: parsedDate.data.totalCards,
      },
    });

    return {
      status: 200,
      success: true,
      message: 'Packs created successfully',
    };
  } catch (error) {
    console.error('Error creating packs:', error);
    return {
      status: 500,
      success: false,
      error: (error as Error).message,
      message: 'Internal server error',
    };
  }
};

export default createPacks;
