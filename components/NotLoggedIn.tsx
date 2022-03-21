import { Box, Center, VStack, Heading, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import { signIn } from "next-auth/react";

type Props = {};

const NotLoggedIn = (props: Props) => {
  return (
    <Center height="100vh">
      <VStack>
        <Heading>FitBot</Heading>
        <Spacer />
        <VStack bg="brand.block" spacing="24px" p="2rem" rounded="md">
          <Heading p="1rem" rounded="sm" width="full">
            You are not logged in.
          </Heading>
          <Text>
            Please login{" "}
            <button onClick={() => signIn()}>
              <Text color="brand.primary">here</Text>
            </button>{" "}
            to track workouts!
          </Text>
        </VStack>
      </VStack>
    </Center>
  );
};

export default NotLoggedIn;
