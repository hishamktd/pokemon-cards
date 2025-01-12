'use server';

import { prisma } from '@/lib/db';

export async function getPacks() {
  const packs = await prisma.packs.findMany();
  return packs;
}
