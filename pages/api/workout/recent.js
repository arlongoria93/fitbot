import { getSession } from "next-auth/react";
import prisma from "../../../utils/prisma";

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
