import React, { Component } from 'react';
import {connect} from 'react-redux';

class Answer extends Component {
    getAnswer = () => {
        this.props.sendData(this.props.answerName);
        this.props.displayNextButton();
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
        answerData: state.answerData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendData: (answerData) => {
            dispatch({type:'GET_ANSWER_NAME', answerData:answerData})
        },
        displayNextButton: () => {
            dispatch({type:'DISPLAY_NEXT_BUTTON'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Answer)