import { useSession, signOut } from "next-auth/react";
import NotLoggedIn from "../components/NotLoggedIn";
import Landing from "../components/Landing";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
        <Landing name={session.user.name} />
      </>
    );
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
