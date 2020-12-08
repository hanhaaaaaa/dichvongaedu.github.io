import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { appRoutes } from "./router";
import "antd/dist/antd.css";
import "./assets/css/font.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {appRoutes.map((r, index) => {
            return (
              <Route path={r.path} key={index} exact={r.exact}>
                <r.component />
              </Route>
            );
          })}
        </Switch>
      </Router>
    );
  }
}
export default App;
