import React from 'react';
import classes from './Info_personal_item.module.css';

function Info_personal_item(props) {
    return (
        <div className={classes.info_personal_item__wrapper}>
            <span>{props.keys}</span>
            <span>{props.value}</span>
        </div>
    );
}

export default Info_personal_item;