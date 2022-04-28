import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <React.Fragment>
        <div className={classes.searchComponent}>
            <input type="text" placeholder="Search by Title, Author, Publisher or ISBN" className={classes.inputBar} />
        </div>
        <span className={classes.search}>
            <button type="submit" className={classes.searchBtn} />
        </span>
        </React.Fragment>
    )
}

export default SearchBar;