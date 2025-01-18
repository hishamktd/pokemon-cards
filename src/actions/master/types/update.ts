'use server';

import { prisma } from '@/lib/db';
import { Types } from '@/types/masters/types';

const updateType = async (data: Types) => {
  try {
    const { id, ...rest } = data;
    await prisma.type.update({
      where: { id },
      data: rest,
    });
    return { success: true, status: 200 };
  } catch (error) {
    console.error('Error updating type:', error);
    return { success: false, error: 'An error occurred during type update' };
  }
};

export default updateType;
