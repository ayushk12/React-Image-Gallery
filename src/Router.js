import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ImageView from "./ImageView/ImageView";
// import ImageSearch from "./ImageSearch/ImageSearch";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />

      <Route path="/image/:id" component={ImageView} />
    </Switch>
  </BrowserRouter>
);

export default Router;
