'use server';

import { prisma } from '@/lib/db';
const getPack = async (id: number) => {
  try {
    return await prisma.packs.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error('Error getting pack:', error);
    return {
      status: 500,
      success: false,
      error: (error as Error).message,
    };
  }
};

export default getPack;
