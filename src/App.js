import React from "react";
import { Switch,Route } from "react-router";

import "./App.css";
import {Login,Dashboard} from "./pages";

function App() {
  return(
    <Switch>
      
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Dashboard} />
    </Switch>
  )
}

export default App;
