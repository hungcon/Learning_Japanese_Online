import React, { Component } from 'react';
import Text from './Text';
const reactStringReplace = require('react-string-replace');
class ContentChoose extends Component {

    render() {
        var blank = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
        return (
            <p className="q-question q-question-choose">
                {
                    reactStringReplace(this.props.question, '-', (match, i) => (
                        <Text  key={i} content={blank}>{match}</Text>
                    ))
                }
            </p>
        );
    }
}

export default ContentChoose;

