import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'info', 'warn']
        : ['warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

try {
  prisma.$connect();
  console.info('Prisma Client connected successfully');
} catch (error) {
  console.error('Failed to connect Prisma Client:', error);
  throw error;
}
