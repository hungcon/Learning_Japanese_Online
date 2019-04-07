import React, { Component } from 'react';
import {connect} from 'react-redux';
class Text extends Component {
    clickBox = (event) => {
        var blank = document.getElementsByClassName('blank');
        //Lấy ra id câu trả lời đã đc set (row 27)
        var indexSTPlace =  event.currentTarget.getAttribute('data-indexSTPlace');
        // console.log(event.currentTarget);
        // console.log(event.target.previousElementSibling.previousElementSibling);

        // Thay thế đáp án đã chọn trong mảng bằng "" khi người dùng click cho giá trị nhảy xuống 
        var currentElement = event.target;
        var sttClick = 0;
        while(true){
            if(currentElement.previousElementSibling !==null){
                currentElement = currentElement.previousElementSibling;
                sttClick ++;
            }else{
                break;
            }
        }
        var allAnswerChooses = this.props.answerDataChoose;
        allAnswerChooses.splice(sttClick, 1);
        allAnswerChooses.splice(sttClick,0,"");


        if(indexSTPlace === null){
            return false;
        }
        //Hiện text 
        blank[indexSTPlace].style = "opacity: 1";
        //Bỏ disable
        blank[indexSTPlace].parentElement.style.display = '';
        //Gán place vừa click = rỗng
        event.currentTarget.innerHTML = this.props.content;
        this.props.hideButtonNext();
    }
    

    render() {
        return (
            <span className="q-3-dot" onClick={ (event) => this.clickBox(event)}>
                {this.props.content}
            </span>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop,
        answerDataChoose : state.answerDataChoose
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideButtonNext: () => {
            dispatch({type: "HIDE_NEXT_BUTTON"})
        }
    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(Text)