import { NextPage } from "next";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import React from "react";
import Profile from "../../components/Profile";
const User: NextPage = () => {
  return (
    <>
      <Profile />
      <NextLink href="/">
        <Link bg="black" textColor="white" p="1" rounded="sm">
          Home
        </Link>
      </NextLink>
    </>
  );
};

export default User;
