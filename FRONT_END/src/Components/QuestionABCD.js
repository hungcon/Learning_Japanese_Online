import React, { Component } from 'react';
import Answer from './Answer';
import TestData from '../TestData/Question.json';
import Question from './Question';

class QuestionABCD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        }
    }
    increaseQuestionId = () => {
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
        if(this.state.id != 1){
            return <button className="btn btn-danger w-20 btn-lg float-left mt-3" onClick={() => this.decreaseQuestionId()}>
                        Previous
                    </button>
        }
    }
    render() {
        
        return (
            <div>
                <div className="container-fluid">
                    {/* tiêu đề của bài */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Hiragana</h1>
                        <a href="#4AE" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> download</a>
                    </div>
                    {/* Page Heading */}
                    {/* đây là 1 câu hỏi */}
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-6 mb-4">
                            {/* Illustrations */}
                            <div className="card shadow">
                                <div className="card-header">
                                    <h6 className="m-0 font-weight-bold text-primary q-number">Question 1 (1/10)</h6>
                                    {/* Note: đây là chỗ bấm xong thì hiển thị kết quả sẽ là 1 trong 2 -- if */}
                                    <div className="result-btn q-result btn btn-success btn-circle btn-md q">
                                        <i className="fas fa-check">
                                        </i>
                                    </div>
                                </div>
                                {
                                    TestData.map((value,key) => {
                                        if(value.id == this.state.id){
                                            return  <div>
                                            <Question 
                                                key 
                                                imgPath = {value.questionImagePath} 
                                                questionContent={value.questionContent} 
                                            />
                                            <Answer answerImagePath={value.answerA.answerImagePath} answerContent = {value.answerA.answerContent}/>
                                            <Answer answerImagePath={value.answerB.answerImagePath} answerContent = {value.answerB.answerContent}/>
                                            <Answer answerImagePath={value.answerC.answerImagePath} answerContent = {value.answerC.answerContent}/>
                                            <Answer answerImagePath={value.answerD.answerImagePath} answerContent = {value.answerD.answerContent}/>
                                        </div>
                                        }
                                    })
                                }


                                {/* Note: cái này sẽ hiện ra sau khi người dùng trả lời */}
                                <div className="q-continue mb-3 mr-2">
                                    {
                                        this.displayPreButton()
                                    }
                                    
                                    <button className="btn btn-info w-20 btn-lg float-right mt-3" onClick={() => this.increaseQuestionId()}>
                                        Next
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-3" />
                    </div>
                    {/* Content Row */}
                </div>
                {/* /.container-fluid */}

            </div>
        );
    }
}

export default QuestionABCD;