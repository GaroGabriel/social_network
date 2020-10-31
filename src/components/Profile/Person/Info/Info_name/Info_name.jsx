import React from 'react';
import classes from './Info_name.module.css';

function Info_name(props) {
    return (
        <div className={classes.info_name__wrapper}>
            <a href="#">
                <h1>{props.name}</h1>
            </a>
        </div>
    );
}

export default Info_name;