'use server';

import { prisma } from '@/lib/db';
import { createTypesSchema } from '@/schema/masters/types';
import { TypesForm } from '@/types/masters/types';

const createTypes = async (data: TypesForm) => {
  const parsedData = createTypesSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      status: 400,
      success: false,
      error: parsedData.error.message,
      zodError: parsedData.error,
    };
  }

  try {
    await prisma.type.create({
      data: {
        name: data.name,
      },
    });
    return { success: true, status: 200 };
  } catch (error) {
    console.error('Error creating type:', error);
    return { success: false, error: 'An error occurred during type creation' };
  }
};

export default createTypes;
