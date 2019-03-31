import React, { Component } from 'react';


class Option extends Component {
    render() {
        var arrButton = this.props.option.split("+");
        const listOption = arrButton.map((value, key) => {
            return (
                <div className="q-1-btn ml-2 mt-1">
                    <button className="btn btn-primary btn-icon-split q-button-answer " data-index={key}>
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