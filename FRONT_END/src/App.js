import React, { Component } from 'react';

import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
      </div>
    );
  }
}

export default App;
