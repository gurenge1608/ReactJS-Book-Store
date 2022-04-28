import React from 'react';
import classes from './Cart.module.css';

const Cart = props => {
    return (
        <div className="position-relative d-flex align-items-center" style={{marginLeft: "10px"}}>
            <span className={classes.itemCount}>
                <label className={classes.itemlabel}>0</label>
            </span>

            <img src="https://www.bookswagon.com/images/svg/cart_white.svg" style={{width: "37px"}} alt="Cart"/>
        </div>
    )
}

export default Cart;