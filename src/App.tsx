import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./Pages/Resume";
import { Blog } from "./Pages/Blog";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
