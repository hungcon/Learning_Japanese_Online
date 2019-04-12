import React, { Component } from 'react';
import Question from './Question';  
import {connect} from 'react-redux';
var ReactCountdownClock = require("react-countdown-clock");
class Test extends Component {
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
                    <ReactCountdownClock seconds={3}  color="#000"  alpha={0.9}  size={300}  onComplete={() => this.props.submitTest()} />
                    <Question type='Fill'/>
                </div>
            </div>
        );
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