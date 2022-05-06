import React from 'react';
import classes from './TrendingSmallItem.module.css';


const TrendingSmallItem = props => {
    return (
        <div className={"col-3-sm " + classes.smallpic}>
            <img alt="Book" src={props.item.image} className={classes.smallimg} />
            <div className={classes.trendquick}>
                <button className={classes.trendquickBtn} onClick={props.onView}>Quick View</button>
            </div>
        </div>
    )
}

export default TrendingSmallItem;