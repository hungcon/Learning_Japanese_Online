import React, { Component } from 'react';
import Hiragana from '../TestData/Hiragana.json';
class CharacterGroup extends Component {
    abc = () => {
        var img = document.getElementById('image-charater');
        console.log(img);
    }
    render() {
        console.log(Object.values(this.props.character))
        return (
        
            <div className="btn-group">
                <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   {
                       this.props.title
                   }
                </button>
                <div className="dropdown-menu">
               {
                   Object.values(this.props.character).map((value, key) => {
                       return <a className="dropdown-item r-btn-character" href="#" onClick = { () => this.abc()}> {value.item1}</a>
                   })
               }
                      
                </div>
            </div>
        );
    }
}

export default CharacterGroup;