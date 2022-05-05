import classes from './BookListTitle.module.css';
const BookListTitle = (props) => {
    return (
        <h2 className={classes.title}>
            {props.text}
        </h2>
    )
}

export default BookListTitle;