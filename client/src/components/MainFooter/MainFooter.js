import React from "react";
import classes from "./MainFooter.module.css";

const MainFooter = (props) => {
  return (
    <div className={classes.container}>
      <div className="row d-flex align-items-center">
        <div className="col-7-sm">
          <ul className={classes.social_icon}>
            <li>
              <a
                className={classes.icon_item}
                href="https://www.bookswagon.com/"
                target="blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                className={classes.icon_item}
                href="https://www.bookswagon.com/"
                target="blank"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a
                className={classes.icon_item}
                href="https://www.bookswagon.com/"
                target="blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                className={classes.icon_item}
                href="https://www.bookswagon.com/"
                target="blank"
              >
                <i class="fab fa-pinterest-p" />
              </a>
            </li>
            <li>
              <a
                className={classes.icon_item}
                href="https://www.bookswagon.com/"
                target="blank"
              >
                <i class="fab fa-youtube" />
              </a>
            </li>
            <li>
              <a
                className={classes.icon_item}
                href="https://www.bookswagon.com/"
                target="blank"
              >
                <i class="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-7-sm d-flex align-items-center justify-content-center">
          {/* <SearchBar /> */}
          {/* <h1>HIIIIIIII</h1> */}
          <div className="col-3-sm" style={{marginRight: '5px'}}>
            <h4 style={{ color: '#fff', fontWeight: '700', fontStyle: 'italic', marginBottom: '10px'}}>Company</h4>
            <ul className={classes.text_color} style={{paddingLeft: '0', listStyle: 'none'}}>
              <li className={classes.list_inline_item}>
                <a href="https://www.bookswagon.com">About Us</a>
              </li>
              <li>
                <a href="https://www.bookswagon.com">Career</a>
              </li>
              <li>
                <a href="https://blog.bookswagon.com" target="blank">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.bookswagon.com">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-3-sm" style={{marginRight: '5px'}}>
            <h4 style={{ color: '#fff', fontWeight: '700', fontStyle: 'italic', marginBottom: '10px'}}>Poilicies</h4>
            <ul className={classes.text_color} style={{paddingLeft: '0', listStyle: 'none'}}>
              <li className={classes.list_inline_item}>
                <a href="https://www.bookswagon.com">Private Policies</a>
              </li>
              <li>
                <a href="https://www.bookswagon.com">Terms of Use</a>
              </li>
              <li>
                <a href="https://blog.bookswagon.com" target="blank">
                  Secure Shopping
                </a>
              </li>
              <li>
                <a href="https://www.bookswagon.com">Copyright Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-3-sm" style={{marginRight: '5px'}}>
            <h4 style={{ color: '#fff', fontWeight: '700', fontStyle: 'italic', marginBottom: '10px'}}>Help</h4>
            <ul className={classes.text_color} style={{paddingLeft: '0', listStyle: 'none'}}>
              <li className={classes.list_inline_item}>
                <a href="https://www.bookswagon.com">Payment</a>
              </li>
              <li>
                <a href="https://www.bookswagon.com">Shipping</a>
              </li>
              <li>
                <a href="https://blog.bookswagon.com" target="blank">
                  Return
                </a>
              </li>
              <li>
                <a href="https://www.bookswagon.com">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-3-sm" style={{marginRight: '5px'}}>
            <h4 style={{ color: '#fff', fontWeight: '700', fontStyle: 'italic', marginBottom: '10px'}}>Misc</h4>
            <ul className={classes.text_color} style={{paddingLeft: '0', listStyle: 'none', minHeight: '96px'}}>
              <li className={classes.list_inline_item}>
                <a href="https://www.bookswagon.com">Affiliate</a>
              </li>
              <li>
                <a href="https://www.bookswagon.com">Sitemap</a>
              </li>
              <li>
                <a href="https://blog.bookswagon.com" target="blank">
                  HTML Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row d-flex">
        <div
          className={classes.text_light + " col-12-sm"}
        >
          <h4>Copyright © 2022 . Bookswagon.com. All Rights Reserved</h4>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
