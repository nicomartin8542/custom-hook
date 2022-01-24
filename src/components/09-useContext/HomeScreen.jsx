import React, { useContext } from "react";
import UserContext from "./userContext";

export const HomeScreen = () => {
  const { name } = useContext(UserContext);
  console.log(name);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
    </div>
  );
};
