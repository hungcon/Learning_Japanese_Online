import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Topbar from './Components/Topbar';
import QuestionABCD from './Components/QuestionABCD';




class App extends Component {
 
  
  render() {
    return (
      <div className="App" id="wrapper">
        {/* <Lession /> */}
        <Navbar></Navbar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>
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
            <QuestionABCD 
              type="choose"
            />
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;