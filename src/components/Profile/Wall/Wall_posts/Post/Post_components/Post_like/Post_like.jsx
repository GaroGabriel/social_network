import React from 'react';
import classes from './Post_like.module.css';

function Post_like(props) {
    return (
        <div className={classes.post_like__wrapper}>
            <span><a href="#"> {props.like} like</a></span>
        </div>
    );
}

export default Post_like;