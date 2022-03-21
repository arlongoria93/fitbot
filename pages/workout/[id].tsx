import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import {
  SimpleGrid,
  GridItem,
  Heading,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import Navbar from "../../components/NavBar";
import prisma from "../../utils/prisma";
import NotLoggedIn from "../../components/NotLoggedIn";
type Props = {
  exercises?: { body: string; how: string; id: number; name: string };
};
import { useSession, signOut } from "next-auth/react";
const SingleWorkout = (props: Props) => {
  const [workout, setWorkout] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  useEffect(() => {
    const exerciseGenerator = async () => {
      console.log("exercise generator");
      const exercise = await fetch(`/api/excercises/${id}`);
      const data = await exercise.json();
      setWorkout(data);
    };
    console.log("before exercise generator");
    exerciseGenerator();
  }, []);

  if (session) {
    return (
      <SimpleGrid h="100vh" spacingY="2rem">
        <GridItem>
          <Navbar />
        </GridItem>
        <GridItem h="full" rowSpan={1}>
          <VStack>
            {workout.length >= 1 ? (
              workout.map((w) => {
                const { exercise } = w;
                return (
                  <HStack
                    justify="space-between"
                    rounded="sm"
                    p="1.5rem"
                    bg="brand.block"
                    w="60%"
                    key={exercise.id}
                  >
                    <Text>{exercise.name}</Text>
                    <Text>Reps: 5</Text>
                  </HStack>
                );
              })
            ) : (
              <Heading>Generating Workout...</Heading>
            )}
          </VStack>
        </GridItem>
      </SimpleGrid>
    );
  }
  return <NotLoggedIn />;
};

export default SingleWorkout;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const exercises = await prisma.exercise.findMany({
    where: { body: "chest" },
    take: 5,
  });
  try {
    for (const e of exercises) {
      await prisma.workoutsOnExercises.create({
        data: {
          workoutId: Number(id),
          exerciseId: e.id,
        },
      });
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/main",
      },
    };
  }
  return {
    props: { exercises },
  };
};
