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
  {
    name: "Standing Barbell Overhead Press",
    body: "shoulders",
    how: "Standing with your feet hip-width apart, grasp a barbell at shoulder height with both hands using a shoulder-width grip. Keeping your core engaged and spine in a neutral position, exhale as you press the bar overhead, keeping the elbows directly underneath the hands. The bar should finish directly overhead. Slowly lower the bar back to starting position and repeat.",
  },
  {
    name: "Single Arm Dumbbell Overhead Press",
    body: "shoulders",
    how: "Standing with your feet shoulder-width apart, curl a dumbbell up to shoulder-height in one hand and bring your arm out to your side so your elbow is in line with your shoulder and at a 90-degree angle. Keeping your core engaged and spine in a neutral position exhale as you press the dumbbell overhead keeping the elbow directly underneath your hand. Slowly the lower the dumbbell back down so your elbow is at 90 degrees and repeat. Once all reps are complete on one side repeat on the opposite side.",
  },
  {
    name: "Dumbbell Lateral Raise",
    body: "shoulders",
    how: "Start standing hip-width apart holding a dumbbell in each hand. Lifting with the elbows, raise the arms up until they are in line with the shoulders, pause, then slowly lower the dumbbells back to starting position and repeat.",
  },
  {
    name: "Single Arm Bottoms Up Kettlebell Overhead Press",
    body: "shoulders",
    how: "Start seated holding a kettlebell in one hand. Lift the kettlebell up to shoulder height gripping the handle so that the bell, or ball part, of the kettlebell is above your hand. Slowly press the kettlebell up focusing on stability. Pause slightly at the top then slowly lower the kettlebell back to starting position and repeat. Once all reps are complete on one side repeat on the opposite side.",
  },
  {
    name: "Cable Face Pull",
    body: "shoulders",
    how: "Stand facing a cable tower with a rope attachment. Grab the rope with an overhand grip. Pull back with the elbows and finish the movement by bringing your hands next to your ears. Pause, then slowly lower back to starting position and repeat.",
  },
  {
    name: "Back Squat",
    body: "legs",
    how: "Set a barbell in a power rack to shoulder height, loaded with an appropriate amount of weight. Get under the barbell, set the bar across your upper traps, or set the bar across your shoulder blades if you’re performing low-bar squats. Brace your core and lift the weight out of the rack. Take small steps back one foot at a time to get yourself into position. With your chest up, squat down until the bottoms of your thighs are parallel to the floor. Now, drive back up by pushing your feet through the floor.",
  },
  {
    name: "Bulgarian Split Squat",
    body: "legs",
    how: "Hold a dumbbell in each hand and stand about a foot in front of a bench. Place one foot, laces down, on a bench. Brace your core and squat down until both of your legs bend to 90 degrees. You can squat down a little further, but don’t let your knee touch the floor. Hold this down position for a beat and then drive back up.",
  },
  {
    name: "Front Squat",
    body: "legs",
    how: "Set a barbell in a power rack to shoulder height, loaded with an appropriate weight. Extend your arms directly out in front of you so that your hands are touching the bar. Place your middle three fingers on the bar, and then drive your palms up. Bring your elbows underneath the bar so that they’re pointing straight forward. The bar should be resting across your upper chest. For lifters who lack the mobility to get into this position, another alternative starting position is to rest the bar on your collarbone (which hurts, yes) and cross your arms so they’re touching the opposite shoulder. This position is called the genie rack position. Step back, so the bar is out of the rack, and keep your elbows pointing forward. With your chest up, squat down until the bottoms of your thighs are parallel to the floor and drive through the floor with your feet to the top.",
  },
  {
    name: "Leg Press",
    body: "legs",
    how: "Sit in the leg press seat, and place your feet in the middle of the sled, about shoulder-width apart. Press the sled out of the rack, lower the safety bars, and then slowly lower the sled towards your chest until your thighs break 90 degrees. Press the sled back up but do not lock out your knees. If your lower back or hips lift off the seat as you drive the weight back up, you’re going too far down.",
  },
  {
    name: "Hack Squat",
    body: "legs",
    how: "Your stance on the foot platform will closely mimic that of your back squat stance. You want your feet slightly outside shoulder width with feet angled slightly outward — they should be in line with the knee as it tracks forward during the descent. Your torso should be stable with your abdominals engaged and your lower back flat on the back pad. Maintain a neutral head position as you lower your body until the bottoms of your thighs are parallel to the foot platform and drive through your feet to the top.",
  },
  {
    name: " Incline Bicep Curl",
    body: "arms",
    how: "Sit on an incline bench and hold a dumbbell in each hand at arm's length. Use your biceps to curl the dumbbell until it reaches your shoulder, then lower them back down to your side and repeat.",
  },
  {
    name: "Concentration Curl",
    body: "arms",
    how: "Sit down on bench and rest your right arm against your right leg, letting the weight hang down. Curl the weight up, pause, then lower. Repeat with the other arm.",
  },
  {
    name: "Twisting Dumbbell Curl",
    body: "arms",
    how: "Hold a dumbbell in each hand at your side with palms facing each other. Use your bicep to curl the dumbbells up to your shoulders alternately, twisting your palms to face your chest as you lift them. Slowly lower the dumbbells back down to your side and repeat.",
  },
  {
    name: "Diamond Press-up",
    body: "arms",
    how: "Lie on the floor with your body straight and form a diamond shape with your hands. Lower your body down until your chest is almost touching the floor. Press your body back up to the starting position, squeezing your triceps and chest at the same time. ",
  },
  {
    name: "One Arm Tricep Extension",
    body: "arms",
    how: "Hold a dumbbell in one hand directly behind your head, with your elbow bent and pointed towards the ceiling. Extend through your elbow until your arm is straight and the dumbbell is directly above you. Lower your arm back to starting position and repeat.",
  },
  {
    name: "Deadlift",
    body: "back",
    how: "Stand in front of a loaded barbell with your feet shoulder-width apart, hips back, and back flat. The knees should be bent slightly to allow you to grip the bar tightly slightly wider than shoulder-width. Keeping your back flat and chest up, tighten the back muscles, and straighten the arms as you load the pull. With everything locked, aggressively push your legs into the floor as you simultaneously pull your chest and shoulders upwards, lifting the bar to the hip.",
  },
  {
    name: "Pull-Up",
    body: "back",
    how: "Assume an overhead grip on the bar, slightly wider than shoulder-width. With the shoulder blades squeeze together, contract the core and upper back as you initiate the pull-up. Aim to pull your chin to or above the bar level.",
  },
  {
    name: "Bent-Over Row",
    body: "back",
    how: "Set up as you would for your deadlift by standing feet shoulder-width apart in front of a loaded barbell. Hinge at the hips until your torso is about parallel to the floor. Grab the barbell with a grip that’s a bit wider than your typical deadlift grip. Lean back, so your weight is on your heels, and row the barbell, leading the pull with your elbow until it touches your belly button.",
  },
  {
    name: "Bent-Over Row",
    body: "back",
    how: "Set up as you would for your deadlift by standing feet shoulder-width apart in front of a loaded barbell. Hinge at the hips until your torso is about parallel to the floor. Grab the barbell with a grip that’s a bit wider than your typical deadlift grip. Lean back, so your weight is on your heels, and row the barbell, leading the pull with your elbow until it touches your belly button. ",
  },
  {
    name: "Single-Arm Row",
    body: "back",
    how: "Stand next to a bench so that it’s parallel to you. Place the same-side hand and knee on it, and firmly plant your other foot onto the floor. Reach down with your free hand and grab a dumbbell. Keep your back flat and your head in a neutral position. Row the dumbbell to your side until your elbow passes your torso. Complete all of your reps on one side and then switch. ",
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
