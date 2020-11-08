import React from 'react';
import classes from './Wall_posts.module.css';
import Post from './Post/Post'


function Wall_posts(props) {

    let postM = props.post.map((p) =>
        < Post avatar={p.avatar} name={p.name} content={p.content} like={p.like} />
    )

    return (
        <div className={classes.wall_posts__wrapper}>
            {postM}
        </div>

    );

}

export default Wall_posts;