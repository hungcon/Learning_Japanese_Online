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
        for (let j = 0; j < place.length; j++) {
            if (place[j].innerText.trim() === '' ) {
                displayNextButton = false;
            }
            
        }
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
        answeredQs: state.answeredQs
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Option)