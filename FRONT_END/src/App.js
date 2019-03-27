import React, { Component } from 'react';
import './App.css';
// import RegAndChoose from './Components/RegAndChoose';
// import Level from './Components/Level';
// import List from './Components/List';
// import Lession from './Components/Lession';
import List from './Components/List';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Lession /> */}
        <List/>
      </div>
    );
  }
}

export default App;
