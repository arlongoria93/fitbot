import { useSession, signOut } from "next-auth/react";
import NotLoggedIn from "../components/NotLoggedIn";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <NotLoggedIn />
    </>
  );
}
