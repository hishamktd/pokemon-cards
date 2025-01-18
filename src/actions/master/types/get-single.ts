'use server';

import { prisma } from '@/lib/db';

const getType = async (id: number) => {
  try {
    const typeData = await prisma.type.findUnique({
      where: { id },
    });

    if (!typeData) {
      return {
        status: 404,
        success: false,
        error: 'Type not found',
      };
    }

    return {
      data: typeData,
      status: 200,
      success: true,
    };
  } catch (error) {
    console.error('Error getting type:', error);
    return {
      status: 500,
      success: false,
      error: (error as Error).message,
    };
  }
};

export default getType;
