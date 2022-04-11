import prisma from "../../../utils/prisma";

export default async (req, res) => {
  try {
    for (const e of req.body.exercises) {
      await prisma.workoutsOnExercises.create({
        data: {
          workoutId: Number(req.body.workoutId),
          exerciseId: e.id,
        },
      });
    }
    res.status(200);
  } catch (error) {
    console.error(error);
  }
};
