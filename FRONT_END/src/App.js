import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Recognize from './Components/Recognize';

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

      // <div className="App" id="wrapper">
      //   {/* <Lession /> */}
      //   <Navbar></Navbar>
      //   <div id="content-wrapper" className="d-flex flex-column">
      //     <div id="content">
      //       {/* <Topbar/> */}
      //       {/* {
      //           ListChooseData.map((value,key) =>{
      //               <QuestionChoose
      //                 key
      //                 number={value.id}
      //                 question={value.question}
      //                 imagePath = {value.imagePath}
      //                 option={value.option}
      //               />
      //           })
      //       } */}
      //       {/* <Question 
      //         type="ABCD"
      //       /> */}
      //       {/* <Question 
      //         type="ABCD"
      //       /> */}
      //       <Test />
      //       <Footer/>
      //     </div>
      //   </div>
      // </div>

    );
  }
}

export default App;