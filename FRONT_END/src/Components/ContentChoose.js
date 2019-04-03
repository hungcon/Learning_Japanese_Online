import React, { Component } from 'react';
import {connect} from 'react-redux';

class ContentChoose extends Component {
    
    clickPutDown = () => {
        console.log("heelo");
        
    }
    
    componentWillMount() {
        
    }
    
    render() {
        return (
            <p className="q-question q-question-choose">
               
            </p>
        );
    }

    componentDidMount = () => {
        // replace - to box
        const rawQuestion = this.props.question;    
        var box = '<span class="q-3-dot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';
        var abc = document.getElementsByClassName('q-question-choose');
        var question = rawQuestion.replace(/-/g, box);
        abc[0].innerHTML = question;
        var countBox = rawQuestion.match(/-/g).length;
        //console.log(countBox + "hello morther fucker");
        this.props.addCountBoxInQuestion(countBox);
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addCountBoxInQuestion: (number) => {
            dispatch({
                type:"GET_COUNT_BOX",
                numberOfBox:number
            });
        },
        setDefaultNumberBox: () => {
            dispatch({
                type:"SET_DEFAULT_NUMBER_BOX"
            });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentChoose)
