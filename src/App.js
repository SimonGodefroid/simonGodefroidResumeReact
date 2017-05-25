import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Layout from "./Layout";
import HomeContainer from "./containers/HomeContainer";
import ContactContainer from "./containers/ContactContainer";
import NotFoundContainer from "./containers/NotFoundContainer";

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={HomeContainer} />
          <Route path="contact" component={ContactContainer} />
          <Route path="*" component={NotFoundContainer} />
        </Route>
      </Router>
    );
  }
}
