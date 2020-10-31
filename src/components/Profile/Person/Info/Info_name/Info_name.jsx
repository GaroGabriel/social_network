import React from 'react';
import './Info_name.css';

function Info_name(props) {
    return (
        <div className='info_name__wrapper'>
            <a href="#">
                <h1>{props.name}</h1>
            </a>
        </div>
    );
}

export default Info_name;