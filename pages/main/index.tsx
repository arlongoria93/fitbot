import {
  Avatar,
  Box,
  Heading,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Button,
  SimpleGrid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Navbar from "../../components/NavBar";
import NotLoggedIn from "../../components/NotLoggedIn";
import Router from "next/router";

type Props = {};

const Main = (props: Props) => {
  const handleNewWorkout = async () => {
    try {
      await fetch("/api/workout");

      Router.push("/workout");
    } catch (error) {
      console.error(error);
    }
  };
  const { data: session } = useSession();
  if (session)
    return (
      <SimpleGrid spacing="2rem" h="100vh">
        <GridItem>
          <Navbar />
        </GridItem>
        <GridItem rowSpan={1}>
          <VStack>
            <Box bg="brand.block" boxSize="sm" rounded="md" shadow="sm">
              <Center h="full">
                <VStack>
                  <Link w="full">
                    <Button
                      onClick={handleNewWorkout}
                      size="lg"
                      w="full"
                      bg="brand.onPrimary"
                      _hover={{ color: "brand.secondary" }}
                    >
                      New Workout
                    </Button>
                  </Link>

                  <NextLink href="/exercises">
                    <Link w="full">
                      <Button
                        size="lg"
                        w="full"
                        bg="brand.onPrimary"
                        _hover={{ color: "brand.secondary" }}
                      >
                        View All Exercises
                      </Button>
                    </Link>
                  </NextLink>
                </VStack>
              </Center>
            </Box>
          </VStack>
        </GridItem>
      </SimpleGrid>
    );
  else return <NotLoggedIn />;
};

export default Main;
