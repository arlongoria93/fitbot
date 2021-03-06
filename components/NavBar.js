import React from "react";
import {
  Avatar,
  Box,
  Heading,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Router from "next/router";

const Navbar = (props) => {
  const { data: session } = useSession();

  return (
    <VStack justify="space-between" shadow="md">
      <Box
        display="flex"
        bg="brand.block"
        width="full"
        p="1.5rem"
        justifyContent="space-between"
      >
        <Link href="/">
          <Heading _hover={{ cursor: "pointer" }} fontSize="xx-large">
            FitBot
          </Heading>
        </Link>
        <Menu autoSelect={false}>
          <MenuButton
            as={Avatar}
            bg="transparent"
            aria-label="Options"
            icon={
              <Avatar
                src={session?.user.image}
                name={session?.user.name}
                ignoreFallback={true}
                showBorder={false}
                border="none"
                color="transparent"
                bg="black"
                bgColor="transparent"
                size="md"
              />
            }
            variant="outline"
          />
          <MenuList bg="brand.onPrimary" border="none" shadow="md">
            <MenuItem
              _hover={{ bg: "brand.onPrimary", color: "brand.secondary" }}
              onClick={() => {
                Router.push("/main");
              }}
            >
              New Workout
            </MenuItem>{" "}
            <MenuItem
              _hover={{ bg: "brand.onPrimary", color: "brand.secondary" }}
              onClick={() => {
                Router.push(`/log/${session?.user.email}`);
              }}
            >
              Log
            </MenuItem>{" "}
            <MenuItem
              _hover={{ bg: "brand.onPrimary", color: "brand.secondary" }}
              onClick={() => {
                signOut();
                Router.push("/");
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </VStack>
  );
};

export default Navbar;
