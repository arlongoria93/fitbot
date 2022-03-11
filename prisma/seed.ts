import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const exerciseData: Prisma.ExerciseCreateInput[] = [
  {
    name: "Barbell Bench Press",
    body: "chest",
    how: "Lie on the bench, under the rack that holds the bar. Your eyes should be roughly aligned with the front of the barbell rack uprights. Your butt, shoulders, and head are flat on the bench with a neutral spine. Your feet are flat on the floor and relatively wide apart. Draw your shoulder blades back behind you to keep from pressing with rounded shoulders.Grasp the barbell using an overhand grip, placing your thumbs on the outside of your closed fist. Your arms are slightly wider than shoulder-width apart and the angle of your upper arms is about 45 degrees to the body. Remove the barbell from the rack, locking your elbows. (Don't move the bar in an arc from the rack directly to the chest position.)Inhale while lowering the bar to your chest, at the nipple line.Exhale as you press the bar above your chest, extending your arms. Don't watch the bar—focus on the ceiling. Lower the bar so it is just above your chest. This is the starting position for the next bench press.",
  },
  {
    name: "Barbell Bench Press",
    body: "arms",
    how: "Lie on the bench, under the rack that holds the bar. Your eyes should be roughly aligned with the front of the barbell rack uprights. Your butt, shoulders, and head are flat on the bench with a neutral spine. Your feet are flat on the floor and relatively wide apart. Draw your shoulder blades back behind you to keep from pressing with rounded shoulders.Grasp the barbell using an overhand grip, placing your thumbs on the outside of your closed fist. Your arms are slightly wider than shoulder-width apart and the angle of your upper arms is about 45 degrees to the body. Remove the barbell from the rack, locking your elbows. (Don't move the bar in an arc from the rack directly to the chest position.)Inhale while lowering the bar to your chest, at the nipple line.Exhale as you press the bar above your chest, extending your arms. Don't watch the bar—focus on the ceiling. Lower the bar so it is just above your chest. This is the starting position for the next bench press.",
  },
  {
    name: "Barbell Bench Press",
    body: "back",
    how: "Lie on the bench, under the rack that holds the bar. Your eyes should be roughly aligned with the front of the barbell rack uprights. Your butt, shoulders, and head are flat on the bench with a neutral spine. Your feet are flat on the floor and relatively wide apart. Draw your shoulder blades back behind you to keep from pressing with rounded shoulders.Grasp the barbell using an overhand grip, placing your thumbs on the outside of your closed fist. Your arms are slightly wider than shoulder-width apart and the angle of your upper arms is about 45 degrees to the body. Remove the barbell from the rack, locking your elbows. (Don't move the bar in an arc from the rack directly to the chest position.)Inhale while lowering the bar to your chest, at the nipple line.Exhale as you press the bar above your chest, extending your arms. Don't watch the bar—focus on the ceiling. Lower the bar so it is just above your chest. This is the starting position for the next bench press.",
  },
  {
    name: "Barbell Bench Press",
    body: "legs",
    how: "Lie on the bench, under the rack that holds the bar. Your eyes should be roughly aligned with the front of the barbell rack uprights. Your butt, shoulders, and head are flat on the bench with a neutral spine. Your feet are flat on the floor and relatively wide apart. Draw your shoulder blades back behind you to keep from pressing with rounded shoulders.Grasp the barbell using an overhand grip, placing your thumbs on the outside of your closed fist. Your arms are slightly wider than shoulder-width apart and the angle of your upper arms is about 45 degrees to the body. Remove the barbell from the rack, locking your elbows. (Don't move the bar in an arc from the rack directly to the chest position.)Inhale while lowering the bar to your chest, at the nipple line.Exhale as you press the bar above your chest, extending your arms. Don't watch the bar—focus on the ceiling. Lower the bar so it is just above your chest. This is the starting position for the next bench press.",
  },
  {
    name: "Barbell Bench Press",
    body: "shoulders",
    how: "Lie on the bench, under the rack that holds the bar. Your eyes should be roughly aligned with the front of the barbell rack uprights. Your butt, shoulders, and head are flat on the bench with a neutral spine. Your feet are flat on the floor and relatively wide apart. Draw your shoulder blades back behind you to keep from pressing with rounded shoulders.Grasp the barbell using an overhand grip, placing your thumbs on the outside of your closed fist. Your arms are slightly wider than shoulder-width apart and the angle of your upper arms is about 45 degrees to the body. Remove the barbell from the rack, locking your elbows. (Don't move the bar in an arc from the rack directly to the chest position.)Inhale while lowering the bar to your chest, at the nipple line.Exhale as you press the bar above your chest, extending your arms. Don't watch the bar—focus on the ceiling. Lower the bar so it is just above your chest. This is the starting position for the next bench press.",
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
