import React, { Component } from 'react';
import Answer from './Answer';
import TestData from '../TestData/Question.json';
import {connect} from 'react-redux';
class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
    }
    
    increaseQuestionId = () => {
        this.getAnswerData();
        this.setState(
            {id: this.state.id+1}
        );
    }

    decreaseQuestionId = () => {
        this.setState(
            {id: this.state.id-1}
        );
    }

    displayPreButton = () => {
        if(this.state.id !== 1){
            return <button className="btn btn-danger w-20 btn-lg float-left mt-3" onClick={() => this.decreaseQuestionId()}>
                        Previous
                    </button>
        }
    }
    displayNextButton = () => {
        if(this.state.id !== 10){
            return  <button className="btn btn-info w-20 btn-lg float-right mt-3" onClick={() => this.increaseQuestionId()}>
                        Next
                    </button>
        }
        if(this.state.id === 10){
            return  <button className="btn btn-info w-20 btn-lg float-right mt-3" onClick={() => this.submitTest()}>
                        Finish
                    </button>
        }
    }
    getAnswerData = () => {
        var answer = {};
        answer.idQuestion = this.state.id;
        answer.answerData =  this.props.answerData;
        this.props.addData(answer);
    }
    submitTest = () => {
        console.log(this.props.userAnswer);
    }
    render() {
        return (
            <div>
                {TestData.map((value, key )=> {
                    if(value.id === this.state.id){
                    return <div className="row">
                                <div className="col-lg-3" />
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow">
                                        <div className="card-header">
                                            <h6 className="m-0 font-weight-bold text-primary q-number">
                                                Question +{value.id}  + ({value.id}/10)
                                            </h6>
                                            <div className="result-btn q-result btn btn-success btn-circle btn-md q">
                                                <i className="fas fa-check">
                                                </i>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-center">
                                            <img className="img-fluid px-3 px-sm-4 mb-2 q-image" style={{width: '20rem'}} src={value.questionImagePath} alt />
                                            </div>
                                            <p className="q-question">{value.questionContent}</p>
                                            <p>Select one: </p>
                                            <Answer answerImagePath={value.answerA.answerImagePath} answerContent = {value.answerA.answerContent} answerName={value.answerA.answerName}/>
                                            <Answer answerImagePath={value.answerB.answerImagePath} answerContent = {value.answerB.answerContent} answerName={value.answerB.answerName}/>
                                            <Answer answerImagePath={value.answerC.answerImagePath} answerContent = {value.answerC.answerContent} answerName={value.answerC.answerName}/>
                                            <Answer answerImagePath={value.answerD.answerImagePath} answerContent = {value.answerD.answerContent} answerName={value.answerD.answerName}/> 
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
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        answerData: state.answerData,
        userAnswer: state.userAnswer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addData: (answer) => {
            dispatch({type:'ADD_ANSWER', answerAdd: answer})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Question);