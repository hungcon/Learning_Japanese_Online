import React, { Component } from 'react';
import Login from '../Login';
import List from '../List';
import { Route } from "react-router-dom";
import Register from '../Register';

class MyRoutes extends Component {
    render() {
        return (
            <div>
              <Route path="/" exact component={Login} />
              <Route path="/list" exact component={List} />
              <Route path="/register" exact component={Register} />
            </div>
        );
    }
}

export default MyRoutes;