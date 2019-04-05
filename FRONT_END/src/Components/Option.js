import React, { Component } from 'react';

import { connect } from 'react-redux';



class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerChoose: '',
            numberChoose:0,
            displayButton: false
        }
    }

    click = (event) => {
        //Lấy ra các span lưu text câu trả lời
        var blank = document.getElementsByClassName('blank');
        var placeMountText;
        event.currentTarget.style.display = 'none';
        var indexAnswer = event.currentTarget.getAttribute('data-index');
        var place = document.getElementsByClassName('q-3-dot');
        //Lấy ra ô đầu tiên trống
        var countWrited = 0;
        for (let j = 0; j < place.length; j++) {
            if (place[j].innerText.trim() === '') {
                countWrited = j + 1;
                placeMountText = place[j];
                break;
            }
        }
        //Gán text
        placeMountText.innerHTML = blank[indexAnswer].innerText;
        var temp = this.state.answerChoose;
        if (countWrited === 5) {
            temp += blank[indexAnswer].innerText
            this.setState({
                answerChoose: temp
            })
        } else {
            temp += blank[indexAnswer].innerText + "+"
            this.setState({
                answerChoose: temp
            })
        }
        // Cập nhật dữ liệu câu trả lời vào store 
        this.props.sendAnswerChoose(this.state.answerChoose);
        //Gán thuộc tính
        placeMountText.setAttribute('data-indexSTPlace', indexAnswer);
        //Ẩn text ở button câu trả lời
        blank[indexAnswer].style = "opacity: 0";

       

        // sau khi mà đã chọn hết ra thì mới có sự kiện này
        for (let i = 0; i < place.length; i++) {
            place[i].onclick = function () {
                //Lấy ra id câu trả lời đã đc set (row 27)
                var indexSTPlace = place[i].getAttribute('data-indexSTPlace');
                //Hiện text 
                blank[indexSTPlace].style = "opacity: 1";
                //Bỏ disable
                blank[indexSTPlace].parentElement.style.display = 'block';
                //Gán place vừa click = rỗng
                place[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; 
                var btn = document.getElementsByClassName('btn-next');
                if(typeof btn[0] !== 'undefined'){
                    btn[0].style.display = "none";     
                }
            }
        }
         // edit by Chung
        var optionArr = document.getElementsByClassName("q-button-answer");
        if(!this.checkHaveButton(optionArr)){
           this.props.displayButton();
        } else {
            this.props.hideButton();
        }
       
    }
    /**
     * Kiểm tra xem còn button nào ở dưới nữa không
     */
    checkHaveButton = (arrBtn) => {
        for (var i = 0; i < arrBtn.length; i++) {
            // vẫn còn btn ở dưới option
            if (arrBtn[i].style.display !== "none") {
                return true;
            }
        }
        return false;
    }
    /**
     * Khi render 1 câu mới thì phải ẩn đi
     */
    componentWillMount() {
        this.props.hideButton();
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


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        displayButton: () => {
            dispatch({
                type: "DISPLAY_NEXT_BUTTON_CHOOSE"
            })
        },
        hideButton: () => {
            dispatch({
                type: "HIDE_NEXT_BUTTON_CHOOSE"
            });
        },
        sendAnswerChoose: (answersChoose) => {
            dispatch({ type: 'GET_ANSWER_NAME', answerData: answersChoose })
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        numberBox: state.numberOfBox
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Option)

