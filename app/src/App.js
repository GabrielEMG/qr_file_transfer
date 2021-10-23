import React from "react";
import Home from "./pages/home";
import Download from "./pages/download";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/download/:fileId">
            <Download />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
