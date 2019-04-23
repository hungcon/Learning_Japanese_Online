import React, { Component } from 'react';
import Login from '../Function/Login';
import List from '../Test/ListTest/List';
import Home from '../Template/Home';
import { Route } from "react-router-dom";
import Register from '../Function/Register';
import ChooseLevel from '../Function/ChooseLevel';
import History from '../History/History';
import Test from '../Test/ListTest/Test';
import Result from '../Result/Result';
import ListVideo from '../Video/ListVideo';
import DetailVideo from '../Video/DetailVideo';
import HighScore from '../Result/HighScore';
import Recognize from '../Recognize/Recognize';

class MyRoutes extends Component {
    render() {
        return (
            <div>
               <Route path="/" exact component={Home} />
               <Route path="/login" exact component={Login} />
               <Route path="/history" exact component={History} />
               <Route path="/result" exact component={HighScore} />
               <Route path="/video" exact component={ListVideo} />
               <Route path="/video/lesson/:number" exact component={DetailVideo} />
               <Route path="/list/:level" exact component={List} />
               <Route path="/register" exact component={Register} />
               <Route path="/level" exact component={ChooseLevel} />
               <Route path="/test/:lesson_id" exact component={Test} />
               <Route path="/result/:lesson_id/:type" exact component={Result} />
               <Route path="/write" exact component={Recognize} />
            </div>
        );
    }
}

export default MyRoutes;