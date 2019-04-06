import React, { Component } from 'react';

import {connect} from 'react-redux';
class ContentChoose extends Component {

    componentWillMount() {
        
    }
    render() {
        return (
            <p className="q-question q-question-choose">
            
            </p>
        );
    }
    
    componentDidMount = () => {
        // place HTML 
        var abc = document.getElementsByClassName('q-question-choose');
        // câu hỏi dạng A-B-C-D
        const rawQuestion = this.props.question;
        // kết quả sau khi được replace
        var question= "";
        // id của câu hỏi
        var id = this.props.numberId;
        // chuỗi các câu trả lời     
        var arrChoosed = this.props.choosed;
        // element {id, content}: câu hỏi đã được chọn : khi quay lại
        var element;
        // choosed : content
        var choosed = "";
        // get element
        element = arrChoosed.find((e) =>{
                return e.id === id;
            });
        // trường hợp mới vào
        if(typeof element !== 'undefined'){
            choosed = element.choose;
        }
        
        // create question
        // choosed
        if(choosed !== ""){
            // A-B-C-D
            var arrQuestion = rawQuestion.split("-");  // A B C D 
            // 1-2-3
            var arrWord = choosed.split("-");   // 1 2 3 
            console.log(arrQuestion);
            console.log(arrWord);
            var countBox = arrQuestion.length;
            
            var headSpan = '<span class="q-3-dot">';
            var footSpan = '</span>';
            for(let i = 0; i < countBox -1; i++){
                question = question.concat(arrQuestion[i]);
                question = question.concat(headSpan);
                question = question.concat(arrWord[i]);
                question = question.concat(footSpan);
            }            
            question = question.concat(arrQuestion[countBox - 1]);  
            console.log(question);
            
        // first time access
        } else{
            var box = '<span class="q-3-dot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';
            question = rawQuestion.replace(/-/g, box); 
        } 
        abc[0].innerHTML = question;   
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentChoose);

