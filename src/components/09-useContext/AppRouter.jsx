import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { Navbar } from "./Navbar";

const AppRouter = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/about" exact component={AboutScreen} />
          <Route path="/login" exact component={LoginScreen} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
