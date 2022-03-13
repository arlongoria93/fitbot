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
} from "@chakra-ui/react";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Navbar from "../../components/NavBar";
import NotLoggedIn from "../../components/NotLoggedIn";

type Props = {};

const Main = (props: Props) => {
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
                  <Button
                    size="lg"
                    w="full"
                    bg="brand.onPrimary"
                    _hover={{ color: "brand.secondary" }}
                  >
                    New Workout
                  </Button>
                  <Button
                    size="lg"
                    w="full"
                    bg="brand.onPrimary"
                    _hover={{ color: "brand.secondary" }}
                  >
                    View All Excerises
                  </Button>
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
