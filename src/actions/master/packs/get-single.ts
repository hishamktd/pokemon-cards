'use server';

import { prisma } from '@/lib/db';
const getPack = async (id: number) => {
  try {
    const packData = await prisma.packs.findUnique({
      where: { id },
    });

    if (!packData) {
      return {
        status: 404,
        success: false,
        error: 'Pack not found',
      };
    }

    const { thumbnail, ...pack } = packData;

    return {
      data: { ...pack, thumbnailUrl: thumbnail },
      status: 200,
      success: true,
    };
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
