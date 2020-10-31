import React from 'react';
import './Cover.css';
import cover from './cover.jpg'
function Cover() {
    return (
        <div className='cover__wrapper'>
            <img src={cover} alt="cover" />
        </div>
    );
}

export default Cover;