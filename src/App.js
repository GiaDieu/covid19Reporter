import React from "react";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Message from "./pages/Message";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Message} />
      </Switch>
    </Router>
  );
};

export default App;
