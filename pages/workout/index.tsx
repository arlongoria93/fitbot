import {
  Box,
  Center,
  GridItem,
  SimpleGrid,
  VStack,
  Button,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/NavBar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSWR from "swr";
type Props = {};
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const index = (props: Props) => {
  const { data: session } = useSession();
  const [workoutId, setWorkoutId] = useState(0);
  const { data, error } = useSWR("/api/workout/recent", fetcher);

  useEffect(() => {
    if (data) setWorkoutId(data[0].id);
  }, [data]);

  return (
    <SimpleGrid h="100vh" spacingY="2rem">
      <GridItem>
        <Navbar />
      </GridItem>{" "}
      <GridItem>
        <Center>
          {workoutId && <Heading>{workoutId}</Heading>}
          <Heading>Please Select A Muscle</Heading>
        </Center>
      </GridItem>
      <GridItem rowSpan={1}>
        <Center>
          <Box
            bg="brand.block"
            rounded="md"
            display="flex"
            boxSize="sm"
            w="70%"
          >
            <Center w="full">
              <VStack justify="center" spacing="1rem">
                <Button w="full" bg="brand.onPrimary" size="lg">
                  Chest
                </Button>
                <Button w="full" bg="brand.onPrimary" size="lg">
                  Arms
                </Button>
                <Button w="full" bg="brand.onPrimary" size="lg">
                  Back
                </Button>
                <Button w="full" bg="brand.onPrimary" size="lg">
                  Shoulders
                </Button>
              </VStack>
            </Center>
          </Box>
        </Center>
      </GridItem>
    </SimpleGrid>
  );
};

export default index;
