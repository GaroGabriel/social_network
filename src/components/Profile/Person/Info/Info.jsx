import React from 'react';
import './Info.css';
import Info_name from './Info_name/Info_name';
import Info_personal from './Info_personal/Info_personal';
import Info_status from './Info_status/Info_status';

function Info() {
    return (
        <div className='info__wrapper'>
            <div className='flex__wrap'>
                <Info_name name='Galust Gabrielyan' />
                <Info_status />
            </div>
            <Info_personal />
        </div>
    );
}

export default Info;