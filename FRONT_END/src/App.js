import React, { Component } from 'react';
import './App.css';
// import RegAndChoose from './Components/RegAndChoose';
// import Level from './Components/Level';
// import List from './Components/List';
// import Lession from './Components/Lession';
import List from './Components/List';
// import History from './Components/History';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Lession /> */}
        <List/>
        {/* <History></History> */}
      </div>
    );
  }
}

export default App;
