import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '../UI/Container';
import TrendingBody from './TrendingBody';
import classes from './TrendingList.module.css';
import '../UI/Arrow.css';

const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;
  
    return (
      <div {...props} className="custom-prevArrow" onClick={onClick} style={{top: "36%"}}>
        <span aria-label="Previous" style={{fontSize:"3.5rem"}}>‹</span>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const {onClick } = props;
  
    return (
      <div {...props} className="custom-nextArrow" onClick={onClick} style={{top: "36%"}}> 
        <span aria-label="Next" style={{fontSize:"3.5rem"}}>›</span>
      </div>
    );
  };

const TrendingList = props => {
    var perChunk = 6 // items per chunk    

    var result = props.items.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/perChunk)

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

    return resultArray
    }, [])

    const slides = result.map((item,index) => <TrendingBody key={index} items={item}></TrendingBody>)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />
      };

      return (
        <div className={classes.trendinglist}>
        <Container>
          <p className={classes.title}>Now Trending</p>
          <Slider {...settings}>
            {slides}
          </Slider>
        </Container>
        </div>
      );
}

export default TrendingList;