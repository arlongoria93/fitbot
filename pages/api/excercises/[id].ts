import { NextApiResponse, NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../utils/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const exercise = await prisma.workoutsOnExercises.findMany({
      where: {
        workoutId: Number(req.query.id),
      },
      include: {
        exercise: true,
      },
    });
    res.json(exercise);
  } catch (error) {
    console.log(error);
  }
};
