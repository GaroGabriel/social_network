import React from 'react';
import './Info_personal.css';
import Info_personal_item from './Info_personal_item/Info_personal_item';

function Info_personal() {
    return (
        <div className='info_personal__wrapper'>
            <Info_personal_item keys='Date of birth: ' value="09.09.1888" />
            <Info_personal_item keys='E-mail: ' value="somemail@gmail.com" />
            <Info_personal_item keys='Web: ' value="www.something.am" />
            <Info_personal_item keys='Phone: ' value="+(000) 000 00 00 00" />

        </div>
    );
}

export default Info_personal;