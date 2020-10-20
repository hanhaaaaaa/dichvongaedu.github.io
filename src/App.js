import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { appRoutes } from "./router";

export default function App() {
  return (
    <Router>
      <Switch>
        {appRoutes.map((r, index) => {
          return (
            <Route path={r.path} key={index}>
              <r.component />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}
