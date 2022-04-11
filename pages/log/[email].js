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
  List,
  Text,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Navbar from "../../components/NavBar";
import NotLoggedIn from "../../components/NotLoggedIn";
import prisma from "../../utils/prisma";
import { FaDumbbell } from "react-icons/fa";

const Main = (props) => {
  const { data: session } = useSession();
  console.log(props);
  if (session)
    return (
      <SimpleGrid spacing="2rem" h="100vh">
        <GridItem>
          <Navbar />
        </GridItem>
        <GridItem>
          <Center>
            <List spacing={3} mb="1.5rem">
              {props.workouts.map((w, i = 1) => {
                return (
                  <ListItem key={w.id}>
                    <ListIcon as={FaDumbbell} />
                    {i + 1}
                  </ListItem>
                );
              })}
            </List>
          </Center>
        </GridItem>
      </SimpleGrid>
    );
  else return <NotLoggedIn />;
};

export default Main;
export const getServerSideProps = async (context) => {
  console.log(context);
  const workouts = await prisma.workout.findMany({
    where: { userEmail: context.params.email },
  });
  return {
    props: { workouts },
  };
};
