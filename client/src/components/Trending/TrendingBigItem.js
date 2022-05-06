import React from 'react';
import classes from './TrendingBigItem.module.css';


const TrendingBigItem = props => {
    return (
        <div className={"col-3-sm d-flex align-items-center justify-content-center " + classes.bigpic}>
            <img alt="Book" src={props.item.image} className={classes.bigimg} />
            <div className={classes.trendquick}>
                <button className={classes.trendquickBtn} onClick={props.onView}>Quick View</button>
            </div>
        </div>
    )
}

export default TrendingBigItem;