import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import EditThing from "./containers/EditThing";
import AddThing from "./containers/AddThing";
import Thing from "./containers/Thing";
import Things from "./containers/Things";
import { Provider } from "react-redux";
import store from "./store";

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/things/:id/edit" component={EditThing} />
        <Route path="/things/add" component={AddThing} />
        <Route path="/things/:id" component={Thing} />
        <Route path="/things" component={Things} />
        <Redirect path="/" to="/things" />
      </Switch>
    </Router>
  </Provider>
);
