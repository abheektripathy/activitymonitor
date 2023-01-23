

import { PrismaClient } from '@prisma/client';
interface Global extends NodeJS.Global {
  prisma: PrismaClient;
}
declare var global: Global;