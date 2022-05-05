import React from 'react';
import Modal from '../UI/Modal';
import classes from './BookQuickView.module.css'; 

const BookQuickView = props => {
    return <Modal onClose={props.onClose}>
        <button className={classes.closeBtn} onClick={props.onClose}>x</button>
        <div className={"row " + classes.item}>
            <div className="col-3-sm" >
                <img src={props.item.image} alt="BookPic"/>
                <div className={classes.actions}>
                    <button>−</button>
                    <input type="number" defaultValue='1' />
                    <button>+</button>
                </div>
                <button className={classes.addBtn}>Add To Cart</button>
            </div>
            <div className={"col-9-sm " + classes.rightside}>
                <p className={classes.price}>đ{props.item.price}</p>
                <h2 className={classes.title}>{props.item.title}</h2>
                <p className={classes.author}>By: {props.item.author}</p>
                <p className={classes.description}>{props.item.description}</p>
                <button type="button" class={classes.detailBtn}>VIEW PRODUCT DETAIL</button>
            </div>
        </div>
    </Modal>
}

export default BookQuickView;