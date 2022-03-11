import type { NextPage } from "next";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/api/auth/login">Login</Link>
      <Link href="/api/auth/logout">Logout</Link>
      <NextLink href="/user">Profile</NextLink>
    </div>
  );
};

export default Home;
