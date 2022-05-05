import React, {useState, useContext, useEffect} from 'react';
import classes from './CartIcon.module.css';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.itemCount} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
        return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
        }, 300);

        return () => {
        clearTimeout(timer);
        };
    }, [items]);

    return (
        <div className="position-relative d-flex align-items-center" onClick={props.onClick}  style={{marginLeft: "10px"}}>
            <span className={btnClasses}>
                <label className={classes.itemlabel}>{numberOfCartItems}</label>
            </span>

            <img src="https://www.bookswagon.com/images/svg/cart_white.svg" style={{width: "37px", cursor: "pointer"}} alt="Cart"/>
        </div>
    )
}

export default Cart;