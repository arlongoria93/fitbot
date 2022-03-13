// pages/signin.jsx
import {
  Center,
  VStack,
  Box,
  Heading,
  SimpleGrid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { getProviders, signIn } from "next-auth/react";
import Router from "next/router";
export default function SignIn({ providers }) {
  return (
    <Center h="100vh">
      <VStack>
        <Box bg="brand.block" h="300px" w="300px" rounded="md">
          <SimpleGrid h="full">
            {" "}
            <Center>
              <Heading>FitBot</Heading>
            </Center>
            {Object.values(providers).map((provider) => (
              <GridItem key={provider.name} rowSpan={4}>
                <VStack h="full">
                  <Center h="full">
                    <Button
                      size="lg"
                      bg="brand.onPrimary"
                      onClick={() => {
                        signIn(provider.id);
                        Router.push("/");
                      }}
                    >
                      Sign in with {provider.name}
                    </Button>
                  </Center>
                </VStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Center>
  );
}
export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
