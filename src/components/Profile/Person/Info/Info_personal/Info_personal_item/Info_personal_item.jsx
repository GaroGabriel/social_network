import React from 'react';
import './Info_personal_item.css';

function Info_personal_item(props) {
    return (
        <div className='info_personal_item__wrapper'>
            <span>{props.keys}</span>
            <span>{props.value}</span>
        </div>
    );
}

export default Info_personal_item;