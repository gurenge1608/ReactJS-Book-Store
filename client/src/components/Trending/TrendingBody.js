import React, {useState, useContext} from 'react';
import TrendingBigItem from './TrendingBigItem';
import TrendingSmallItem from './TrendingSmallItem';
import classes from './TrendingBody.module.css'
import BookQuickView from '../BookList/BookQuickView';
import CartContext from '../../store/cart-context';

const TrendingBody = props => {
    const [quickViewisShown, setQuickViewisShown] = useState(false);
    const [quickViewItem, setQuickViewItem] = useState({});

    const quickViewHandler = item => {
      setQuickViewisShown(true)
      setQuickViewItem(item)
    }

    const quickViewClose = () => {
      setQuickViewisShown(false)
    }

    const cartCtx = useContext(CartContext);

    const addToCartHandler = item => {
      cartCtx.addItem(item);
      setQuickViewisShown(false)
    };

    const smallitems = props.items.slice(1, props.items.length-1).map(item => 
        <TrendingSmallItem 
            key={item.id} 
            item={item}
            onView={quickViewHandler.bind(null, item)}
        />)
    return (
    <React.Fragment>
        {quickViewisShown && <BookQuickView item={quickViewItem} onClose={quickViewClose} onAddToCart={addToCartHandler}/>}
        <div className="row d-flex align-items-center justify-content-center">
            <TrendingBigItem item={props.items[0]} onView={quickViewHandler.bind(null, props.items[0])}/>

            <div className={"col-6-sm " + classes.smallitem}>
                <div className="row d-flex align-items-center justify-content-center">
                    {smallitems}
                </div>
            </div>

            <TrendingBigItem item={props.items[props.items.length - 1]} onView={quickViewHandler.bind(null, props.items[0])} /> 
    
        </div>
    </React.Fragment>)
}

export default TrendingBody;