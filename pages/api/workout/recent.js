import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const session = await getSession({ req });
  const workout = await prisma.workout.findMany({
    where: { userEmail: session?.user?.email },
    distinct: ["userEmail"],
    orderBy: {
      id: "desc",
    },
    take: 1,
  });
  res.json(workout);
};
