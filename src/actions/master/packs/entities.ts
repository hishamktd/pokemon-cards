'use server';

import { prisma } from '@/lib/db';

export async function getPacks(page: number, size: number) {
  try {
    const [packs, count] = await prisma.$transaction([
      prisma.packs.findMany({
        skip: (page - 1) * size,
        take: size,
      }),
      prisma.packs.count(),
    ]);

    return { data: packs, totalCount: count };
  } catch (error) {
    console.error('Error getting packs:', error);
    throw error;
  }
}
