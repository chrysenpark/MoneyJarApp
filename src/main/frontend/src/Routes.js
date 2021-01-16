import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./login";
import Signup from "./signup";
import DashBoard from "./Dashboard";
import App from "./App";
import JarContents from "./JarContents"
import history from './history';

class Routes extends Component {
    render() {
        return (
            <Router history={history} forceRefresh = {true}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/dashboard/" component={DashBoard} />
                    <Route path="/openJar/" component={JarContents} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;