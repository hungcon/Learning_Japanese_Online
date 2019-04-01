import React, { Component } from 'react';

class ContentChoose extends Component {
    
    render() {
<<<<<<< HEAD
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
        

=======
>>>>>>> 07be3253207d6d02d8cebfab618449a2a306c2a6
        return (
            <p className="q-question q-question-choose"></p>
        );
    }

    componentDidMount = () => {
        const rawQuestion = this.props.question;    
        var box = '<span class="q-3-dot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';
       var abc = document.getElementsByClassName('q-question-choose');
       var question = rawQuestion.replace(/-/g, box);
       abc[0].innerHTML = question;
    }
}

export default ContentChoose;