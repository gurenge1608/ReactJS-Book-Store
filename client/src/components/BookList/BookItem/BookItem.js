import React from 'react';
import classes from './BookItem.module.css';
import Card from '../../UI/Card';

const BookItem = (props) => {
    return (
        <div className={classes.item}>
            <Card>
                <img className={classes.image} src={props.image} alt="Book"/>
                <div className={classes.itembody}>
                    <button className={classes.quickbtn} onClick={props.onView}>Quick View</button>
                    <p className={classes.itemtext}>
                        <span className={classes.booktitle}>{props.title}</span>
                        <span className={classes.author}>{props.author}</span><br/>
                        <span className={classes.price}>đ{props.price}</span>
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default BookItem;