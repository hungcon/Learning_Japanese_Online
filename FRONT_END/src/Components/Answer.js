import React, { Component } from 'react';
import {connect} from 'react-redux';
class Answer extends Component {

    getAnswer = (e) => {
        // Cập nhật trang thái đã trả lời câu hỏi 
        this.props.checkAnsweredQs();
        var domAllAnswer = document.getElementsByClassName("q-abcd-answer");
        var domClickAnswer = document.getElementById(e.target.getAttribute('id'));
        for(var i=0;i<domAllAnswer.length;i++){
            domAllAnswer[i].classList.remove("actived");
        }
        domClickAnswer.classList.add("actived");
        this.props.sendData(this.props.answerName);
        this.props.displayNextButton();
    }

    getAnswerResponse =()=>{
        var resAnswer = '';
        for(var i=0;i<this.props.userAnswer.length;i++){
            if((i+1)===this.props.answerId){
                resAnswer += this.props.userAnswer[i].answerData;
            }
        }
        return resAnswer;
    }

    componentDidMount =()=>{
        var previousLocationQS = this.props.previousLocation;
        // console.log(this.props.answerId);
        if((this.props.answerId) <= previousLocationQS){
            var resAnswer = this.getAnswerResponse();
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
            var domAllAnswer = document.getElementsByClassName("q-abcd-answer");
            for(var i=0;i<domAllAnswer.length;i++){
                if(i === temp){
                    domAllAnswer[i].classList.add("actived");
                }
            }
        }
    }
    
    render() {
        return (
            <div className="q-abcd-answer clearfix"  id={"QsABCD"+this.props.answerId.toString()+this.props.answerName} onClick={(e) =>this.getAnswer(e) }>
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
        },
        
        checkAnsweredQs: () => {
            dispatch({type:'UPDATE_STATUS_ANSWERED'})
        },

        displayNextButton: () => {
            dispatch({type:'DISPLAY_NEXT_BUTTON'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer)