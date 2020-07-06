import React from 'react';
import photo from './pic.jpg';
import './photo.css';

function Photo() {
    return (
        <div className="pic"> 
            <img src={photo} alt="pic" />
        </div>
    );
}

export default Photo;