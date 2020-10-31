import React from 'react';
import classes from './Post_content.module.css';

function Post_content(props) {
    return (
        <div className={classes.post_content__wrapper}>
            <p>{props.content}</p>
        </div>
    );
}

export default Post_content;