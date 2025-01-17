'use server';

import { prisma } from '@/lib/db';
const getPack = async (id: number) => {
  try {
    const pack = await prisma.packs.findUnique({ where: { id } });
    return { data: pack, status: 200, success: true };
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
