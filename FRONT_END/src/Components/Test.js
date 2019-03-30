import React, { Component } from 'react';
import Question from './Question';  

class QuestionABCD extends Component {
    render() {
        
        return (
            <div>
                <div className="container-fluid">
                    {/* tiêu đề của bài */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Hiragana</h1>
                        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="fas fa-download fa-sm text-white-50" /> Download</button>
                    </div>
                    <Question />
                </div>
            </div>
        );
    }
}
export default QuestionABCD;