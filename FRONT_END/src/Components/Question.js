import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mb-2 q-image" style={{width: '20rem'}} src={this.props.imgPath} alt />
                </div>
                <p className="q-question">{this.props.questionContent}</p>
                <p>Select one: </p>
            </div>
        );
    }
}

export default Question;