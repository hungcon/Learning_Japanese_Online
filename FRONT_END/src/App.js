import React, { Component } from 'react';
// import RegAndChoose from './Components/RegAndChoose';
// import Level from './Components/Level';
// import List from './Components/List';
// import Lession from './Components/Lession';


// import RegAndChoose from './Components/RegAndChoose';

import Level from './Components/Level';
// import List from './Components/List';

// import Level from './Components/Level';
import List from './Components/List';

// import Lession from './Components/Lession';


import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Recognize from './Components/Recognize';
import Test from './Components/Test';

// import AlertInformation from './Components/AlertInformation';
// import { BrowserRouter as Router } from "react-router-dom";
// import MyRoutes from './Components/Routes/MyRoutes';
import Test from './Components/Test';

class App extends Component {

  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <AlertInformation />
      //     <MyRoutes />
      //   </div>
      // </Router>

      <div className="App" id="wrapper">
        {/* <Lession /> */}
        <Navbar></Navbar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">

            {/* <Topbar/> */}


            <Recognize />
            <Footer/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;