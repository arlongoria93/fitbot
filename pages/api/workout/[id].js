import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../../utils/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const workouts = await prisma.workoutsOnExercises.findMany({
      where: {
        workoutId: Number(req.query.id),
      },
    });
    res.json(workouts);
  } catch (error) {
    console.error(error);
  }
};
