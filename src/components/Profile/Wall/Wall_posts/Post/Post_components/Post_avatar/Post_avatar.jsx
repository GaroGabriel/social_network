import React from 'react';
import classes from './Post_avatar.module.css';

function Post_avatar(props) {
    return (
        <div className={classes.post_avatar__wrapper}>
            <img src={props.avatar} alt="avatar" />
        </div>
    );
}

export default Post_avatar;