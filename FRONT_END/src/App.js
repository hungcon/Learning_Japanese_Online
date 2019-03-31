import React, { Component } from 'react';
import './App.css';
// import RegAndChoose from './Components/RegAndChoose';
// import Level from './Components/Level';
// import List from './Components/List';
// import Lession from './Components/Lession';
import AlertInformation from './Components/AlertInformation';
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from './Components/Routes/MyRoutes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AlertInformation />
          <MyRoutes />
        </div>
      </Router>
    );
  }
}

export default App;
