import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const exerciseData: Prisma.ExerciseCreateInput[] = [
  {
    name: "Barbell Bench Press",
    body: "chest",
    how: "Lie on the bench, under the rack that holds the bar. Your eyes should be roughly aligned with the front of the barbell rack uprights. Your butt, shoulders, and head are flat on the bench with a neutral spine. Your feet are flat on the floor and relatively wide apart. Draw your shoulder blades back behind you to keep from pressing with rounded shoulders.Grasp the barbell using an overhand grip, placing your thumbs on the outside of your closed fist. Your arms are slightly wider than shoulder-width apart and the angle of your upper arms is about 45 degrees to the body. Remove the barbell from the rack, locking your elbows. (Don't move the bar in an arc from the rack directly to the chest position.)Inhale while lowering the bar to your chest, at the nipple line.Exhale as you press the bar above your chest, extending your arms. Don't watch the bar—focus on the ceiling. Lower the bar so it is just above your chest. This is the starting position for the next bench press.",
  },
  {
    name: "Push Up",
    body: "chest",
    how: "On the ground, set your hands at a distance that is slightly wider than shoulder-width apart. Your feet should be set up in a way that feels right and comfortable and in balance. Think of your body as one giant straight line. Your head should be looking slightly ahead of you, not straight down. At the top of your push-up, your arms should be straight and supporting your weight.",
  },
  {
    name: "Dumbbell Flys",
    body: "chest",
    how: "Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench. To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, then press the dumbbells to lockout at the top. Slightly retract your shoulder blades, unlock your elbows, and slowly lower the dumbbells laterally while maintaining the angle at your elbow. Once the dumbbells reach chest level, reverse the movement by squeezing your pecs together and bringing the dumbbells back to their starting position. Without allowing the dumbbells to touch, start the next repetition, and continue until the set is completed.",
  },
  {
    name: "Tricep Push Up",
    body: "chest",
    how: "Get into a plank position with your hands directly below shoulders, your neck and spine neutral, and your feet together. On the descent, keep your elbows pinned to your sides and your upper arms straight back. Lower down until your chest reaches the floor and return to start.",
  },
  {
    name: "Decline Push Up",
    body: "chest",
    how: "Bend your elbows to lower your chest until it almost touches the floor, stopping once your elbows are at your ribcage. Maintain an aligned position and use a smooth, controlled motion. As you lower to the ground, look up slightly to allow full range of motion and avoid banging your nose or forehead on the ground. This position may make you want to arch your back but resist this temptation as doing so is not helpful and could set you up for an injury. Push up until your elbows are straight, but not locked, to return to the starting position.",
  },
];

async function main() {
  console.log("Start seeding ...");
  for (const u of exerciseData) {
    const exercise = await prisma.exercise.create({
      data: u,
    });
    console.log(`Created exercise with id:${exercise.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
