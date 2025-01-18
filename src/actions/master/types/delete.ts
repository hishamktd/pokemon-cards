'use server';

import { prisma } from '@/lib/db';

const deleteTypes = async (id: number) => {
  try {
    return await prisma.type.delete({ where: { id } });
  } catch (error) {
    console.error('Error deleting pack:', error);
    return {
      status: 500,
      success: false,
      error: (error as Error).message,
    };
  }
};

export default deleteTypes;
