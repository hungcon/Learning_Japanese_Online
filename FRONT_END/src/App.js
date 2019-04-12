import React, { Component } from 'react';
// import RegAndChoose from './Components/RegAndChoose';
// import Level from './Components/Level';
// import List from './Components/List';
// import Lession from './Components/Lession';

// import RegAndChoose from './Components/RegAndChoose';
// import Level from './Components/Level';
// import List from './Components/List';
// import Lession from './Components/Lession';

// import Navbar from './Components/Navbar';
// import Topbar from './Components/Topbar';
<<<<<<< HEAD
// import Question from './Components/Question';
// import Footer from './Components/Footer';
=======
import Question from './Components/Question';
import Test from './Components/Test';
import Footer from './Components/Footer';
>>>>>>> 0d84f68a3920f71e6d633b7980cee80e0ca2bc31

import AlertInformation from './Components/AlertInformation';
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from './Components/Routes/MyRoutes';

class App extends Component {

  render() {
    return (
<<<<<<< HEAD
      <Router>
        <div className="App">
          <AlertInformation />
          <MyRoutes />
=======
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
            {/* {
                ListChooseData.map((value,key) =>{
                    <QuestionChoose
                      key
                      number={value.id}
                      question={value.question}
                      imagePath = {value.imagePath}
                      option={value.option}
                    />
                })
            } */}
            {/* <Question 
              type="ABCD"
            /> */}
            {/* <Question 
              type="ABCD"
            /> */}
            <Test />
            <Footer/>
          </div>
>>>>>>> 0d84f68a3920f71e6d633b7980cee80e0ca2bc31
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
      //       <Question 
      //         type="Fill"
      //       />
      //       {/* <Question 
      //         type="ABCD"
      //       /> */}
      //       <Footer/>
      //     </div>
      //   </div>
      // </div>

    );
  }
}

export default App;