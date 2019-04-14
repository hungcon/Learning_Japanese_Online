import React, { Component } from 'react';
class CharacterGroup extends Component {
    changeImg = (event) => {
        //Thay đổi ảnh chữ
        var img = document.getElementById('image-charater');
        var src = event.currentTarget.getAttribute('data-src');
        var name = event.currentTarget.getAttribute('data-name');
        img.src = src;
        //Gán tên chữ cho ảnh để nhận diện
        var imgCharacter = document.getElementById('image-charater');
        imgCharacter.setAttribute('data-name', name);
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
                       return <li className="dropdown-item r-btn-character" data-src={value.images} data-name={value.name}  onClick = { (event) => this.changeImg(event)} key={key}> {value.item} </li>
                   })
               }
                      
                </div>
            </div>
        );
    }
}

export default CharacterGroup;