import { Box, Center, VStack, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";

type Props = {};

const NotLoggedIn = (props: Props) => {
  return (
    <Center height="100vh">
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
    </Center>
  );
};

export default NotLoggedIn;
