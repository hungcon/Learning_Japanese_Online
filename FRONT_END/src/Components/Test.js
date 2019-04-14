import React, { Component } from 'react';
import Question from './Question';  
import {connect} from 'react-redux';
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown-now';
import $ from 'jquery';
import axios from 'axios';

var ReactCountdownClock = require("react-countdown-clock");
class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: '',
            questions: '',
            lesson_id: '',
            rule: '',
        };
    }

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

    componentWillMount = function(){
        var lesson_id = this.props.match.params.lesson_id;
        axios.put(`http://127.0.0.1:8000/api/lesson/`+ lesson_id, {})
        .then(res => {
          if(res.data.error != null){
              this.props.AlertOn(res.data.error,'danger');
          }else{
            this.setState(
                {
                    type: res.data.type,
                    questions: res.data.questions,
                    lesson_id: res.data.lesson_id,
                    rule: res.data.rule,
                }
            );
          }
        }).catch(function (error) {
          alert(error + '. Something was wrong');
        })  
    }

    render() {
        console.log(this.state.type)
        return (
            <div>
                <div className="container-fluid">
                
                    {/* tiêu đề của bài */}
                    <div className="d-sm-flex align-items-center justify-content-between mb- pt-2">
                        <h1 className="h3 mb-0 text-gray-800">{this.state.rule}</h1>
                        <h1 className="h3 mb-0 text-gray-800 float-right contentTime" > 
                            <Countdown className="timer" date={Date.now() + 20000*60} 
                                onComplete={() => this.props.submitTest()}
                                onTick={(calcTimeDelta) => this.onTikTok(calcTimeDelta)}
                            />
                        </h1>    
                    </div>

                    {/* <ReactCountdownClock seconds={3}  color="#000"  alpha={0.9}  size={300}  onComplete={() => this.props.submitTest()} /> */}
                    <Question type={this.state.type} questions={this.state.questions} lesson_id={this.state.lesson_id} />
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
        testTimeFinish: state.testTimeFinish,
        notification: state.notification
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitTest: () => {
            dispatch({type:'HANDLE_SUBMIT_TEST'})
        },

        AlertOn: (data,classDispath) => {
            dispatch({type:'SHOW_MESSAGE', message: data, class: classDispath})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test)