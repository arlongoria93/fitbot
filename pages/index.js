import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NotLoggedIn from "../components/NotLoggedIn";
import Landing from "../components/Landing";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return <Landing name={session.user.name} img={session.user.image} />;
  }
  return (
    <>
      <NotLoggedIn />
    </>
  );
}
{
  /* <button onClick={() => signOut()}>Sign out</button> */
}
