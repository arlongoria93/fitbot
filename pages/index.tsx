import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>
      <Link href="/user">Profile</Link>
    </div>
  );
};

export default Home;
