import React from 'react';
import classes from './Icons.module.css';
import bell from './bell.svg'
import grup from './grup.svg'


function Icons() {
    return (
        <div className={classes.icons__wrapper}>
            <div className={classes.bell}>
                <a href="#">
                    <img src={bell} alt="bell" />
                    <div className={classes.bell__notification}>
                        5
                </div>
                </a>

            </div>
            <div className={classes.grup}>
                <a href="#">
                    <img src={grup} alt="grup" />
                    <div className={classes.grup__notification}>
                        2
                </div>
                </a>
            </div>
        </div>
    )
}

export default Icons;