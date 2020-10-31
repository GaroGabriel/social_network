import React from 'react';
import classes from './Post_name.module.css';

function Post_name(props) {
    return (
        <div className={classes.post_name__wrapper}>
            <span>{props.name}</span>
        </div>
    );
}

export default Post_name;