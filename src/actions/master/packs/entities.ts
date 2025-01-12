'use server';

import { prisma } from '@/lib/db';
import { ServerBaseParams } from '@/types';

export async function getPacks(params: ServerBaseParams) {
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

    const [packs, count] = await prisma.$transaction([
      prisma.packs.findMany({
        skip: (page - 1) * size,
        take: size,
        where: filters,
      }),
      prisma.packs.count({
        where: filters,
      }),
    ]);

    return { data: packs, totalCount: count };
  } catch (error) {
    console.error('Error getting packs:', error);
    return { data: [], totalCount: 0, error: (error as Error).message };
  }
}
