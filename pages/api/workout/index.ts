import { NextApiResponse, NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../utils/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
