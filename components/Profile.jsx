import React from "react";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Loading from "./Loading";
const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <Image src={user.picture} alt={user.name} height="100" width="100" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
