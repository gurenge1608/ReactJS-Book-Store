import React from 'react';
import classes from './MainFooter.module.css';

const MainFooter = (props) => {
    return (
        <div className={classes.container}>
            <div className="row d-flex align-items-center">
                <div className="col-1-sm">
                    <a href="https://www.bookswagon.com/">
                        <img src="https://www.bookswagon.com/images/logos/logo-new.png" id="ctl00_imglogo" alt="Bookswagon-24x7 online bookstore" className="logonew"/>
                    </a>
                </div>
                <div className="col-6-sm d-flex align-items-center justify-content-center">
                    {/* <SearchBar /> */}
                    {/* <h1>HIIIIIIII</h1> */}
                </div>
                <div className=" col-6-sm d-flex align-items-center justify-content-end">
                    {/* <UserHeader /> */}
                    {/* <CartIcon onClick={props.onShowCart} /> */}
                    <h4 style={{color: 'white'}}>Copyright © 2022 . Bookswagon.com. All Rights Reserved</h4>
                </div>
            </div>
        </div>
        
    )
}

export default MainFooter;