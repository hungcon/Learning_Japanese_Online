import React, { Component } from 'react';
import Question from './Question';  
import {connect} from 'react-redux';
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown-now';
import $ from 'jquery';
var ReactCountdownClock = require("react-countdown-clock");
class Test extends Component {
    onTikTok = (calcTimeDelta) =>{
        var tikTok = calcTimeDelta.total / 1000;
        var timer = $('.contentTime > span');
        if(tikTok < 15){
            timer.removeClass('timer-safe');
            if(tikTok % 2 === 0){
                timer.removeClass('timer-danger');
                timer.addClass('active-danger');
            } else {
                timer.removeClass('active-danger');
                timer.addClass('timer-danger');
            }
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                
                    {/* tiêu đề của bài */}
                    <div className="d-sm-flex align-items-center justify-content-between mb- pt-2">
                        <h1 className="h3 mb-0 text-gray-800">Hiragana</h1>
                        <h1 className="h3 mb-0 text-gray-800 float-right contentTime" > 
                            <Countdown className="timer" date={Date.now() + 20000} 
                                onComplete={() => this.props.submitTest()}
                                onTick={(calcTimeDelta) => this.onTikTok(calcTimeDelta)}
                            />
                        </h1>    
                    </div>

                    {/* <ReactCountdownClock seconds={3}  color="#000"  alpha={0.9}  size={300}  onComplete={() => this.props.submitTest()} /> */}
                    <Question type='Fill'/>
                </div>
            </div>
        );
    }
    componentDidMount() {
       $('.contentTime > span').addClass('timer timer-safe')
    }
    
    
}
const mapStateToProps = (state, ownProps) => {
    return {
        testTimeFinish: state.testTimeFinish
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitTest: () => {
            dispatch({type:'HANDLE_SUBMIT_TEST'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)