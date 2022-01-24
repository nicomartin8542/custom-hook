import React from "react";
import AppRouter from "./AppRouter";
import UserContext from "./userContext";

export const MainApp = () => {
  return (
    <div>
      <UserContext.Provider
        value={{
          name: "Nicolas",
          edad: 28,
        }}
      >
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
};
