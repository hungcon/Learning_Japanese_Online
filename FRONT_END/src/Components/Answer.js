import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
class Answer extends Component {
    getAnswer = () => {
        this.props.sendData(this.props.answerName);
    }

    componentDidMount =()=>{

        var previousLocationQS = this.props.previousLocation;
        
        // console.log(previousLocationQS);
        // console.log(this.props.answerId);

        if((this.props.answerId) <= previousLocationQS){

            var resAnswer = '';
            this.props.userAnswer.map((value,key)=>{
                if((key+1)===this.props.answerId){
                    resAnswer = value.answerData;
                }
            });

            var temp = -1;

            switch (resAnswer) {
                case "A":
                    temp = 0;
                    break;
                case "B":
                    temp = 1;
                    break;
                case "C":
                    temp = 2;
                    break;
                case "D":
                    temp = 3;
                    break;    
                default:
                    temp = -1; 
                    break;
            }
            
            var arr = $(".q-abcd-answer");

            arr.each(function (index, el) {
                if(index ===temp){
                    $(el).addClass('actived');
                }
            });
        }
    }
    
    render() {
        return (
            <div className="q-abcd-answer clearfix" onClick={() => this.getAnswer()}>
                <div className="q-abcd-btn float-left">
                    <img src={this.props.answerImagePath} alt="B" className="img-fluid q-op-image q-option" />
                </div>
                <div className="q-abcd-content float-left">{this.props.answerContent}</div>
                <div className="hidden-div d-none">{this.props.answerName}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        answerData: state.answerData,
        previousLocation : state.currentLocationQs,
        userAnswer: state.userAnswer,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendData: (answerData) => {
            dispatch({type:'GET_ANSWER_NAME', answerData:answerData})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Answer)