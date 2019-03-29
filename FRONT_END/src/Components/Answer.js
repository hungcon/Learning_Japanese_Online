import React, { Component } from 'react';

class Answer extends Component {
    render() {
        return (
            <div className="q-abcd-answer clearfix">
                <div className="q-abcd-btn float-left">
                    <img src={this.props.answerImagePath} alt="B" className="img-fluid q-op-image q-option" />
                </div>
                <div className="q-abcd-content float-left">{this.props.answerContent}</div>
            </div>
        );
    }
}

export default Answer;