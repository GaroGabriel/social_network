import React from 'react';
import './ListItem.css';

function ListItem(props) {
    return (

        <li>
            <div className="list__dot"></div>
            <a href="#">{props.name}</a>
        </li>

    );
}

export default ListItem;