import React from 'react';
import { addPost } from '../../../../redux/State';
import classes from './Wall_input.module.css';





function Wall_input(props) {


    let newPost = React.createRef()
    const postButton = () => {
        props.addPost(newPost.current.value)
    }


    return (
        <div className={classes.wall_input__wrapper}>
            <hr />
            <textarea ref={newPost} placeholder='Your News'></textarea>
            <button onClick={postButton}>Publish</button>
        </div>
    );
}

export default Wall_input;