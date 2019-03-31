import React, { Component } from 'react';

class ContentChoose extends Component {
    render() {
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