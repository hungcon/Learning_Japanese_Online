import React, { Component } from 'react';

import { connect } from 'react-redux';



class Option extends Component {

    click = (event) => {
        //Lấy ra các span lưu text câu trả lời
        var blank = document.getElementsByClassName('blank');
        var placeMountText;
        event.currentTarget.style.display = 'none';
        var indexAnswer = event.currentTarget.getAttribute('data-index');
        var place = document.getElementsByClassName('q-3-dot');
        //Lấy ra ô đầu tiên trống
        for (let j = 0; j < place.length; j++) {
            if (place[j].innerText.trim() === '') {
                placeMountText = place[j];
                break;
            }
        }
        //Gán text
        placeMountText.innerHTML = blank[indexAnswer].innerText;
        //Gán thuộc tính
        placeMountText.setAttribute('data-indexSTPlace', indexAnswer);
        //Ẩn text ở button câu trả lời
        blank[indexAnswer].style = "opacity: 0";

        var displayNextButton = true;
        var locationEmpty = 0;
        for (let j = 0; j < place.length; j++) {
            if (place[j].innerText.trim() === '' ) {
                locationEmpty = j;
                displayNextButton = false;
            }
            
        }
    
        // Lấy giá trị đáp án mà người dùng đã chọn đưa vào 1 mảng 
        var allAnswerChooses = this.props.answerDataChoose;

        var userAnswer = blank[indexAnswer].innerText;

        var countAnswered =  allAnswerChooses.length;
        
        var checkValueClick = 0;
        for(var i=0;i<allAnswerChooses.length;i++){
            console.log(allAnswerChooses[i]);
            if(allAnswerChooses[i] === ""){
                allAnswerChooses.splice(i, 1);
                allAnswerChooses.splice(i,0,userAnswer);
                checkValueClick = 1;
                break;
            }
        }

        if(checkValueClick === 0){
            if(countAnswered <= place.length){
                if(countAnswered ===4 ){
                    allAnswerChooses.splice(countAnswered,0,userAnswer);
                }else{
                    allAnswerChooses.splice(locationEmpty,0,userAnswer);
                }
            }
        }
       
        this.props.updateAnswerChooses(allAnswerChooses);

        if(displayNextButton){
            this.props.displayNextButton();
            this.props.updateAnsweredQs();
        }
    }

    render() {

        var arrButton = this.props.option.split("+");
        const listOption = arrButton.map((value, key) => {
            return (
                <div className="q-1-btn ml-2 mt-1" key={key}>
                    <button type="button" className="btn btn-primary btn-icon-split q-button-answer " onClick={(event) => this.click(event)} data-index={key} >
                        <span className="text blank">{value}</span>
                    </button>
                </div>
            );
        });

        return (
            <div className="q-list-button ml-5">
                {listOption}
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        answeredQs: state.answeredQs,
        answerDataChoose : state.answerDataChoose
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        displayNextButton: () => {
            dispatch({type:"DISPLAY_NEXT_BUTTON"})
        },
        updateAnsweredQs: () => {
            dispatch({type:'UPDATE_STATUS_ANSWERED'})
        },
        updateAnswerChooses : (allAnswerChooses)=>{
            dispatch({type:'GET_ARRAY_ANSWER_CHOOSE',answerDataChoose :allAnswerChooses})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Option)

