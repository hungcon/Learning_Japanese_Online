import React, { Component } from 'react';
import Hiragana from '../TestData/Hiragana.json';
class CharacterGroup extends Component {
    changeImg = (event) => {
        var img = document.getElementById('image-charater');
        var src = event.currentTarget.getAttribute('data-src');
        img.src = src;
    }
    render() {
        
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
                       return <a className="dropdown-item r-btn-character" data-src={value.images} href="#" onClick = { (event) => this.changeImg(event)} key={key}> {value.item}</a>
                   })
               }
                      
                </div>
            </div>
        );
    }
}

export default CharacterGroup;