import React, { Component } from 'react';


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
            if(place[j].innerText.trim() == ''){
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
        for (let i = 0; i < place.length; i++) {
            place[i].onclick = function(){
                //Lấy ra id câu trả lời đã đc set (row 27)
                var indexSTPlace = place[i].getAttribute('data-indexSTPlace');
                //Hiện text 
                blank[indexSTPlace].style = "opacity: 1";
                //Bỏ disable
                blank[indexSTPlace].parentElement.style.display = 'block';
                //Gán place vừa click = rỗng
                place[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
    }
    render() {
        var arrButton = this.props.option.split("+");
        const listOption = arrButton.map((value, key) => {
            return (
                <div className="q-1-btn ml-2 mt-1" key={key}>
                    <button type="button" className="btn btn-primary btn-icon-split q-button-answer " data-index={key} onClick={ (event) => this.click(event)}>
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

export default Option;