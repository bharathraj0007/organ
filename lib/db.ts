/**
 * Database Client Singleton
 * 
 * This file provides a singleton instance of Prisma Client to prevent
 * multiple instances from being created in development mode.
 * 
 * In production, a single instance is created and reused.
 * In development, Next.js hot-reloading can cause multiple instances,
 * so we store it in the global object to reuse across reloads.
 */

import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

/**
 * Create or retrieve the Prisma Client instance
 * 
 * - In production: Always creates a new instance
 * - In development: Reuses the global instance to prevent connection exhaustion
 */
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  })

// Store the Prisma instance in global for development
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
