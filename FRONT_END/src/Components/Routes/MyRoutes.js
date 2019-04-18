import React, { Component } from 'react';
import Login from '../Login';
import List from '../List';
import Home from '../Home';
import { Route } from "react-router-dom";
import Register from '../Register';
import ChooseLevel from '../ChooseLevel';
import History from '../History';
import Test from '../Test';
import Result from '../Result';
import ListVideo from '../ListVideo';
import DetailVideo from '../DetailVideo';

class MyRoutes extends Component {
    render() {
        return (
            <div>
               <Route path="/" exact component={Home} />
               <Route path="/login" exact component={Login} />
               <Route path="/history" exact component={History} />
               <Route path="/video" exact component={ListVideo} />
               <Route path="/video/lesson/:number" exact component={DetailVideo} />
               <Route path="/list/:level" exact component={List} />
               <Route path="/register" exact component={Register} />
               <Route path="/level" exact component={ChooseLevel} />
               <Route path="/test/:lesson_id" exact component={Test} />
               <Route path="/result/:lesson_id/:type" exact component={Result} />
            </div>
        );
    }
}

export default MyRoutes;