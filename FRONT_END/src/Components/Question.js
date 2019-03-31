import React, { Component } from 'react';
import $ from 'jquery';


class Question extends Component {


    render() {
        const question = this.props.questionContent;
        const typeQuestion = this.props.type;
        const box = '<span class="q-3-dot">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
        $(function () {
            if(typeQuestion === "choose"){
                var content = question.replace(/-/g, box);
                $('.q-question-choose').append(content);    
            }   
        });
        if (this.props.type === "ABCD") {
            return (
                <div>
                    <div className="text-center">"
                        <img className="img-fluid px-3 px-sm-4 mb-2 q-image" style={{ width: '20rem' }} src={this.props.imgPath} alt="halo" />
                    </div>
                    <p className="q-question">{this.props.questionContent}</p>
                    <p className="name" >Select one: </p>
                </div>
            );
        } else {
            return (
                <div>
                    <div className="text-center">"
                        <img className="img-fluid px-3 px-sm-4 mb-2 q-image" style={{ width: '20rem' }} src={this.props.imgPath} alt="halo" />
                    </div>
                    <p className="q-question mt-2 q-question-choose">
                    </p>
                    <p className="name" >Choose: </p>
                </div>
            );
        }
    }
}

export default Question;