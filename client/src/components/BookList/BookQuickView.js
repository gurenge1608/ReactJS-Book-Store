import React, {useState, useRef} from 'react';
import Modal from '../UI/Modal';
import classes from './BookQuickView.module.css'; 

const BookQuickView = props => {
    const [enteredAmount, setEnteredAmount] = useState(1);
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const amountMinusHandler = () => {
        const value = amountRef.current.value - 1
        setEnteredAmount(value);
    }
    const amountPlusHandler = () => {
        const value = 1 + parseInt(amountRef.current.value)
        setEnteredAmount(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmountNumber = +enteredAmount;
    
        if (
          enteredAmountNumber < 1
        ) {
          setAmountIsValid(false);
          return;
        }
    
        props.onAddToCart({
            id: props.item.id,
            title: props.item.title,
            price: props.item.price,
            author: props.item.author,
            description: props.item.description,
            image: props.item.image,
            amount: enteredAmountNumber
        });
      };

    return <Modal onClose={props.onClose}>
        <button className={classes.closeBtn} onClick={props.onClose}>x</button>
        <div className={"row " + classes.item}>
            <div className="col-3-sm" >
                <img className={classes.image} src={props.item.image} alt="BookPic"/>
                <div className={classes.actions}>
                    <button onClick={amountMinusHandler}>−</button>
                    <input type="number" ref={amountRef} value={enteredAmount} onChange={amountChangeHandler} />
                    <button onClick={amountPlusHandler}>+</button>
                </div>
                <button className={classes.addBtn} onClick={submitHandler}>Add To Cart</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </div>
            <div className={"col-9-sm " + classes.rightside}>
                <p className={classes.price}>đ{props.item.price}</p>
                <h2 className={classes.title}>{props.item.title}</h2>
                <p className={classes.author}>By: {props.item.author}</p>
                <p className={classes.description}>{props.item.description}</p>
                <button type="button" className={classes.detailBtn}>VIEW PRODUCT DETAIL</button>
            </div>
        </div>
    </Modal>
}

export default BookQuickView;