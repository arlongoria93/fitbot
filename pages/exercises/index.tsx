import {
  Avatar,
  Box,
  Heading,
  VStack,
  Menu,
  Flex,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Button,
  SimpleGrid,
  GridItem,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Navbar from "../../components/NavBar";
import NotLoggedIn from "../../components/NotLoggedIn";
import prisma from "../../utils/prisma";
type Props = {
  exercises?: { body: string; how: string; id: number; name: string };
};

const Exercises = (props: Props) => {
  const { data: session } = useSession();
  if (session)
    return (
      <SimpleGrid spacing="2rem" h="100vh">
        <GridItem>
          <Navbar />
        </GridItem>
        <GridItem rowSpan={1}>
          <Center>
            <VStack w="60%">
              {props.exercises
                ? props.exercises.map((e) => (
                    <Flex
                      key={e.id}
                      rounded="md"
                      justifyContent="space-between"
                      bg="brand.block"
                      p="1.5rem"
                      w="full"
                    >
                      <div>
                        <Text fontSize="xl">{e.name}</Text>
                      </div>
                      <div>
                        <Text color="brand.secondary">
                          {e.body.split("")[0].toUpperCase() +
                            e.body.split("").slice(1).join("")}
                        </Text>
                      </div>
                    </Flex>
                  ))
                : "Loading..."}
            </VStack>
          </Center>
        </GridItem>
      </SimpleGrid>
    );
  else return <NotLoggedIn />;
};

export default Exercises;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const exercises = await prisma.exercise.findMany();

  return {
    props: { exercises },
  };
};
