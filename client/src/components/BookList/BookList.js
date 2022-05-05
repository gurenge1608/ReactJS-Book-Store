import React, {useState}  from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../UI/Container';
import BookListTitle from './BookListTitle';
import BookItem from './BookItem/BookItem';
import classes from './BookList.module.css';
import BoockQuickView from './BookQuickView';
import '../UI/Arrow.css';

const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
  const { onClick } = props;

  return (
    <div {...props} className="custom-prevArrow" onClick={onClick}>
      <span aria-label="Previous" style={{fontSize:"3.5rem"}}>‹</span>
    </div>
  );
};
const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
  const {onClick } = props;

  return (
    <div {...props} className="custom-nextArrow" onClick={onClick}>
      <span aria-label="Next" style={{fontSize:"3.5rem"}}>›</span>
    </div>
  );
};

const BookList = props => {
    const [quickViewisShown, setQuickViewisShown] = useState(false);
    const [quickViewItem, setQuickViewItem] = useState({});

    const quickViewHandler = item => {
      setQuickViewisShown(true)
      setQuickViewItem(item)
    }

    const quickViewClose = () => {
      setQuickViewisShown(false)
    }

    const booklist = props.items.map(item => 
      <BookItem 
        key={item.id}
        id={item.id} 
        title={item.title} 
        author={item.author} 
        description={item.description}
        price={item.price}
        image={item.image}
        onView={quickViewHandler.bind(null, item)} 
      />);

    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: true,
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />
      };
      return (
        <React.Fragment>
          {quickViewisShown && <BoockQuickView item={quickViewItem} onClose={quickViewClose} />}
        <div className={classes.list} style={{marginTop: '100px'}}>
        <Container>
          <BookListTitle text={props.text} />
          <Slider {...settings}>
            {booklist}
          </Slider>
        </Container>
        </div>
        </React.Fragment>
      );
    
  }
export default BookList;