import React, { Component } from 'react';
import CharacterGroup from './CharacterGroup';
import $ from 'jquery';
import { Tesseract } from '../Library/TesseractWrapper';
import trans from 'hiragana-romaji-katakana';
import {connect} from 'react-redux';
import AlertInformation from './AlertInformation';
import Hiragana from '../TestData/Hiragana.json';
class Recognize extends Component {
    setEventCanvas = () => {
      const canvas = document.getElementById('canvasInAPerfectWorld');
      var left = $('#canvasInAPerfectWorld').offset().left;
      var top = $('#canvasInAPerfectWorld').offset().top;
      canvas.width = 405;
      canvas.height = 405;
      const context = canvas.getContext('2d');
     
      context.strokeStyle = '#ff4141';
      context.lineWidth = 8;
      context.lineCap = "round";
  
      let shouldPaint = false;
  
      canvas.addEventListener('mousedown', function(event){
          shouldPaint = true;
          context.beginPath();
      });
  
      canvas.addEventListener('mouseup', function(){
          shouldPaint = false;
      });
  
      canvas.addEventListener('mousemove', function(event){
          if(shouldPaint){
              context.lineTo(event.pageX - left , event.pageY-top);
              context.stroke();
          }
      });
    }
    //clear canvas
    clearCanvas = () => {
      const canvas = document.getElementById('canvasInAPerfectWorld');
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    }
    componentDidMount(){
      //set các event cho canvas
        this.setEventCanvas();
    }

    recognize = () => {
      var text = 'shi';
      const canvas = document.getElementById('canvasInAPerfectWorld');
      var recog = this;
      function success() {
        recog.props.AlertOn('Perfect, you write so good! Keep going.', 'success');
      }
      function danger() {
        recog.props.AlertOn('Please retry!', 'danger');
      }
      Tesseract.recognize(canvas.getContext('2d'), {
        lang: 'jpn'
      })
      .then(function(result){
          if(result.text.trim() === trans.romajiToHiragana(text)){
            success();
          } else {
            danger();
          }
      });
    }

    render() {
        return (
            <div>
            <div className=" mb-4">
                <h1 className="h3 d-sm-flex align-items-center justify-content-between mb-0 text-gray-800">
                    {
                      Hiragana.map((value,key) => {
                         return <CharacterGroup title={value.title} key={key}  id={key+1} character={value.character} />
                      })
                    }
                </h1>
            </div>
            <AlertInformation />
            <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-8 mb-4">
              {/* Illustrations */}
              <div className="card shadow" id="card_shadow">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div className="r-img-character">
                        <h4 className="text-center">
                          Sample
                        </h4>
                        <img src="img/hiragana/Japanese_Hiragana_kyokashotai_A.png" className="img-fluid" alt="" id="image-charater"/>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="r-img-character">
                        <h4 className="text-center">
                          Write here
                        </h4>
                        <canvas id="canvasInAPerfectWorld"  />
                        <img alt="" id="imgExport" className="d-none" style={{width: '400px', height: '400px'}} />
                      </div>
                    </div>
                  </div>
                  <div className="row r-button ">
                    <button id="exportButton" type="button" className="btn btn-primary" onClick={ () => this.recognize()}>Test</button>
                    <button id="reset" type="button" className="btn btn-danger" onClick={ () => this.clearCanvas()}>Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>          
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
      notification: state.notification
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      AlertOn: (data,classDispath) => {
          dispatch({type:'SHOW_MESSAGE', message: data, class: classDispath})
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recognize);