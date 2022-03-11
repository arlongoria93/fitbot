import { PrismaClient } from "@prisma/client";

const createUser = async (email) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    email: email,
  });
  await prisma.$disconnect();
  return user;
};
