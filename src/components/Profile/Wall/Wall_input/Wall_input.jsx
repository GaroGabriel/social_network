import React from 'react';
import classes from './Wall_input.module.css';



let newPost = React.createRef()

function Wall_input() {
    const postButton = () => {
        alert(newPost.current.value)
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