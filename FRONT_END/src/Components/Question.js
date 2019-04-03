import React, { Component } from 'react';
import Answer from './Answer';
import TestData from '../TestData/Question.json';
import ChooseData from '../TestData/Choose.json';
import { connect } from 'react-redux';
import Option from './Option';
import ContentChoose from './ContentChoose';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
    }

    increaseQuestionId = () => {

        this.setState(
            { id: this.state.id + 1 }
        );
        this.props.resetAnsweredQs();
        this.getAnswerData();
        this.props.hideNextButton();
    }

    decreaseQuestionId = () => {
        this.setState(
            { id: this.state.id - 1 }
        );

        this.props.resetAnsweredQs();
        this.getAnswerData();
        
    }

    displayPreButton = () => {
        if (this.state.id !== 1) {
            return <button className="btn btn-danger w-20 btn-lg float-left mt-3 ml-2" onClick={() => this.decreaseQuestionId()}>
                Previous
                    </button>
        }
    }

    displayNextButton = () => {
        if (this.state.id !== 10 && this.props.displayNextButton) {
            return <button className="btn btn-info w-20 btn-lg float-right mt-3" onClick={() => this.increaseQuestionId()}>
                Next
                    </button>
        }
        if (this.state.id === 10) {
            return <button className="btn btn-info w-20 btn-lg float-right mt-3" onClick={() => this.submitTest()}>
                Finish
                    </button>
        }
    }

    getAnswerData = () => {
        // console.log(this.state.id);
        var userAnswers = this.props.userAnswer;
        var temp = 0;
        for(var j=0;j< userAnswers.length;j++){
            if(userAnswers[j].idQuestion ===this.state.id){
                temp=1;
                break;
            }
        }
        if(temp===0){
            var newAnswer = {};
            newAnswer.idQuestion = this.state.id;
            if(this.props.answeredQs === false){
                newAnswer.answerData = "";
            }else{
                newAnswer.answerData = this.props.answerData;
            }
            newAnswer.checkAnswered = this.props.answeredQs;
            this.props.addData(newAnswer);
        }else{

            var updateAnswer = {};
            updateAnswer.idQuestion = this.state.id;
            var oldUserAnswers = this.props.userAnswer;
            var checkAnswered = '';
            var oldAnswer = '';

            for(var i=0;i<oldUserAnswers.length;i++){
                if(oldUserAnswers[i].idQuestion ===this.state.id){
                    checkAnswered = oldUserAnswers[i].checkAnswered;
                    oldAnswer = oldUserAnswers[i].answerData;
                }
            }
    
            if(this.props.answeredQs ===true){
                updateAnswer.answerData = this.props.answerData;
                updateAnswer.checkAnswered = true;
            }
            if(checkAnswered === true && this.props.answeredQs ===false){
                updateAnswer.answerData = oldAnswer;
                updateAnswer.checkAnswered = checkAnswered;
            }
    
            if(checkAnswered === false && this.props.answeredQs ===false){
                updateAnswer.answerData = "";
                updateAnswer.checkAnswered =checkAnswered;
            }
            
            this.props.updateAnswerQs(updateAnswer);

        }

        this.props.updateLocationQs(this.state.id+1);
    }
 
    submitTest = () => {
        this.props.resetAnsweredQs();
        this.getAnswerData();
        console.log(this.props.userAnswer);
        
    }

    render() {
        var data;
        const typeQuestion = this.props.type;
        if (typeQuestion === "ABCD") {
            data = TestData;
        } else {
            data = ChooseData; 
        }
        // console.log("Render !!!");
        return (       
            <div>
                {data.map((value, key) => {
                    if (value.id === this.state.id) {
                        if (typeQuestion === "ABCD") {
                            return <div className="row" key={key}>
                                <div className="col-lg-3" />
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow">
                                        <div className="card-header">
                                            <h6 className="m-0 font-weight-bold text-primary q-number">
                                                Question  {value.id}    ({value.id}/10)
                                        </h6>
                                            <div className="result-btn q-result btn btn-success btn-circle btn-md q">
                                                <i className="fas fa-check">
                                                </i>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-center">
                                                <img className="img-fluid px-3 px-sm-4 mb-2 q-image" style={{ width: '20rem' }} src={value.questionImagePath} alt="" />
                                            </div>
                                            <p className="q-question mt-2 q">{value.questionContent}</p>
                                            <p>Select one: </p>
                                            <Answer answerImagePath={value.answerA.answerImagePath} answerContent={value.answerA.answerContent} answerName={value.answerA.answerName} answerId={value.id} />
                                            <Answer answerImagePath={value.answerB.answerImagePath} answerContent={value.answerB.answerContent} answerName={value.answerB.answerName} answerId={value.id} />
                                            <Answer answerImagePath={value.answerC.answerImagePath} answerContent={value.answerC.answerContent} answerName={value.answerC.answerName} answerId={value.id} />
                                            <Answer answerImagePath={value.answerD.answerImagePath} answerContent={value.answerD.answerContent} answerName={value.answerD.answerName} answerId={value.id} />
                                        </div>
                                        <div className="q-continue mb-3 mr-2">
                                            {this.displayPreButton()}
                                            {this.displayNextButton()}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3" />

                            </div>
                        } else {
                            return <div className="row" key={key}>
                                <div className="col-lg-3" />
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow">
                                        <div className="card-header">
                                            <h6 className="m-0 font-weight-bold text-primary q-number">
                                                Question {value.id}  ({value.id}/10)
                                        </h6>
                                            <div className="result-btn q-result btn btn-success btn-circle btn-md q">
                                                <i className="fas fa-check">
                                                </i>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-center">
                                                <img className="img-fluid px-3 px-sm-4 mb-2 q-image" style={{ width: '20rem' }} src={value.questionImagePath} alt = '' />
                                            </div>
                                            <ContentChoose
                                                
                                                question={value.questionContent}
                                            />
                                            <p>Choose: </p>
                                            <Option
                                                
                                                type={this.props.type}
                                                option={value.option}
                                            />
                                        </div>
                                        <div className="q-continue mb-3 mr-2">
                                            {this.displayPreButton()}
                                            {this.displayNextButton()}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3" />

                            </div>
                        }

                    }
                    return '';
                }
                )}
            </div>
        );

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        answerData: state.answerData,
        userAnswer: state.userAnswer,
        answeredQs : state.answeredQs,
        previousLocation : state.currentLocationQs,
        displayNextButton: state.displayNextButton
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addData: (answer) => {
            dispatch({ type: 'ADD_ANSWER', answerAdd: answer })
        },
        updateLocationQs: (currentLocation) => {
            dispatch({ type: 'UPDATE_LOCATION_QUESTION', currentLocation: currentLocation })
        },
        updateAnswerQs: (updateAnswer) => {
            dispatch({ type: 'UPDATE_ANSWER', answerUpdate: updateAnswer })
        },
        resetAnsweredQs: () => {
            dispatch({type:'RESET_STATUS_ANSWERED'})
        },
        hideNextButton: () => {
            dispatch({ type: 'HIDE_NEXT_BUTTON' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);