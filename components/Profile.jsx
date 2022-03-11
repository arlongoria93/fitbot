import React from "react";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Loading from "./Loading";
import { Avatar } from "@chakra-ui/react";
const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <Avatar src={user.picture} name={user.name} size="xl" />
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
