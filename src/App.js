import React from "react";
import { Switch,Route } from "react-router";

import "./App.css";
import {Login,Dashboard,SignUp} from "./pages";

function App() {
  return(
    <Switch>
      
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route path="/" component={Dashboard} />
    </Switch>
  )
}

export default App;
