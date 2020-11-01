import React from 'react';
import classes from './ListItem.module.css';

function ListItem(props) {
    return (

        <li>
            <div className={classes.list__dot}></div>
            <a href={props.hr}>{props.name}</a>
        </li>

    );
}

export default ListItem;