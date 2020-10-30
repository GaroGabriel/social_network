import React from 'react';
import './Icons.css';
import bell from './bell.svg'
import grup from './grup.svg'
function Icons() {
    return (
        <div className="icons__wrapper">
            <div className="bell">
                <a href="#">
                    <img src={bell} alt="bell" />
                </a>
                <div className="bell__notification">
                    5
                </div>
            </div>
            <div className="grup">
                <a href="#">
                    <img src={grup} alt="grup" />
                </a>
                <div className="grup__notification">
                    2
                </div>
            </div>
        </div>
    )
}

export default Icons;