import React, { Component } from 'react';

class ContentChoose extends Component {
    componentDidMount = () => {
        
        const rawQuestion = this.props.question;
        const box = '<span class="q-3-dot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>';
        var aaa = document.getElementsByClassName('q-question-choose');
        var question = rawQuestion.replace(/-/g, box);
        aaa[0].innerHTML  = question;
        
    }
    render() {
        return (
            <p className="q-question q-question-choose"></p>
        );
    }
}

export default ContentChoose;