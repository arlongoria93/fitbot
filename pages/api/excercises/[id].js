import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
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
