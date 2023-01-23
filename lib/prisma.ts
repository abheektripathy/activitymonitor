
import { PrismaClient } from '@prisma/client'
 let prisma: PrismaClient;

 if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (//@ts-ignore
        !global.prisma) {
            //@ts-ignore
        global.prisma = new PrismaClient();
    }
    //@ts-ignore
    prisma = global.prisma;
}


    export default prisma;


