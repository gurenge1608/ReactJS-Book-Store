import React from 'react';
import classes from './UserHeader.module.css';

const UserHeader = () => {
    return (
        <div>
            <span className={classes.usernametext}>
                Hello, User</span>
            <span className={classes.accountred}>
                <img src="https://www.bookswagon.com/images/account_red.svg" alt="Account" className={classes.accountimg}/>
            </span>
        </div>
    )
}

export default UserHeader;