'use server';

import { prisma } from '@/lib/db';
import { ServerBaseParams } from '@/types';

const getTypes = async (params: ServerBaseParams) => {
  const { page, size, query } = params;

  try {
    const queryNumber = parseInt(query, 10);
    const isQueryNumberValid = !isNaN(queryNumber);

    const filters = query
      ? {
          OR: [
            {
              name: {
                contains: query,
                mode: 'insensitive' as const,
              },
            },
            ...(isQueryNumberValid
              ? [
                  {
                    totalCards: {
                      equals: queryNumber,
                    },
                  },
                ]
              : []),
          ],
        }
      : undefined;

    const [types, count] = await prisma.$transaction([
      prisma.type.findMany({
        skip: (page - 1) * size,
        take: size,
        where: filters,
      }),
      prisma.type.count({ where: filters }),
    ]);

    return {
      data: { types, count },
      status: 200,
      success: true,
    };
  } catch (error) {
    console.error('Error getting types:', error);
    return {
      status: 500,
      success: false,
      error: (error as Error).message,
    };
  }
};

export default getTypes;
