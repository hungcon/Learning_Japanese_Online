import React, { Component } from 'react';
import $ from 'jquery';

class ContentChoose extends Component {
    render() {
        const question = this.props.question;
        console.log(question);
        
        const box = '<span class="q-3-dot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';
        
        $(function () {
            $('.q-abcd-answer').click(function (event) {
                var arr = $(".q-abcd-answer");
                console.log(arr.length);
                arr.each(function (index, el) {
                    $(el).removeClass('actived');
                });
                $(this).addClass('actived')
            });
            $('.q-question-choose').append(question.replace(/-/g, box));
        });
        return (
            <p className="q-question q-question-choose"></p>
        );
    }
}

export default ContentChoose;