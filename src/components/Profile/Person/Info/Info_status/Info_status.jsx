import React from 'react';
import classes from './Info_status.module.css';

function Info_status(props) {
    return (
        <div className={classes.info_status__wrapper}>
            <span>{props.status}</span>
        </div>
    );
}

export default Info_status;