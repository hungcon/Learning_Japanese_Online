import React, { Component } from 'react';
import Login from '../Login';
import List from '../List';
import { Route } from "react-router-dom";

class MyRoutes extends Component {
    render() {
        return (
            <div>
              <Route path="/" exact component={Login} />
              <Route path="/list" exact component={List} />
            </div>
        );
    }
}

export default MyRoutes;