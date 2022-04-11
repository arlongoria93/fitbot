import { getSession } from "next-auth/react";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async (req, res) => {
  const session = await getSession({ req });
  console.log(session);
  const workout = await prisma.workout.create({
    data: {
      user: {
        connect: { email: session?.user?.email },
      },
    },
  });
  res.json(workout);
};
