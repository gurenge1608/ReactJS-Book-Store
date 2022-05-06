// import React from "react";
// import classes from "./AdsSlider.module.css"

// const AdsSlider = () => {
//     $('.responsive').slick({
//         dots: true,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//           // You can unslick at a given breakpoint now by adding:
//           // settings: "unslick"
//           // instead of a settings object
//         ]
//       });
// }

// export default AdsSlider;


import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './AdsSlider.module.css';
import BookList from "../BookList/BookList";
import '../UI/Arrow.css';

// const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
//     const { onClick } = props;
  
//     return (
//       <div {...props} className="custom-prevArrow" onClick={onClick}>
//         <span aria-label="Previous" style={{fontSize:"3.5rem"}}>‹</span>
//       </div>
//     );
//   };
//   const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
//     const {onClick } = props;
  
//     return (
//       <div {...props} className="custom-nextArrow" onClick={onClick}>
//         <span aria-label="Next" style={{fontSize:"3.5rem"}}>›</span>
//       </div>
//     );
//   };

export default class AdsSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
    //   nextArrow: <GalleryNextArrow />,
    //   prevArrow: <GalleryPrevArrow />
    };
    return (
      <div>
        {/* <h2>Previous and Next methods</h2> */}
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h3>1</h3>
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
          <div key={3}>
            <h3>3</h3>
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
          <div key={5}>
            <h3>5</h3>
          </div>
          <div key={6}>
            <h3>6</h3>
          </div>
        </Slider>
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}