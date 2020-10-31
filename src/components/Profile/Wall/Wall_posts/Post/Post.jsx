import React from 'react';
import classes from './Post.module.css';
import Post_avatar from './Post_components/Post_avatar/Post_avatar';
import Post_content from './Post_components/Post_content/Post_content';
import Post_like from './Post_components/Post_like/Post_like';
import Post_name from './Post_components/Post_name/Post_name';

function Post(props) {
    return (
        <div className={classes.post__wrapper}>

            <div className={classes.flex_left}>
                <Post_avatar avatar={props.avatar} />
            </div>
            <div className={classes.flex_right}>
                <Post_name name={props.name} />
                <Post_content content={props.content} />
                <Post_like like={props.like} />
            </div>

        </div>
    );
}

export default Post;