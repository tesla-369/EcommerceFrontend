import React from "react";
import Slider from "react-slick";
import "../slider/index.css";

import Slide1 from "../../../../src/assets/images/slider-1.png";
import Slide2 from "../../../../src/assets/images/slider-2.png";

import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrow: true,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative ">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img
              src={Slide1}
              className="w-100"
              alt="this is image of slider1 which have apples in a white net backpack"
            />
            <div className="info">
              <h2 className="mb-3">
                Don’t miss amazing
                <br />
                grocery deals
              </h2>
              <p>Save up to 50% off on your first order</p>
            </div>
          </div>
          <div className="item">
            <img
              src={Slide2}
              className="w-100"
              alt="this is image of slider2 which have images of coconut,lemon,wheats,cucumber above pink grocery hand bag"
            />
            <div className="info">
            <h2 className="mb-3">
                                    Fresh Vegetables<br/>
                                    Big discount
                                </h2>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
        </Slider>

          <div className="newsLetterBanner">
            <SendOutlinedIcon/>
            <input type="text" placeholder="Your email address"/>
              <Button className="bg-g">Subscribe</Button>
          </div>

      </div>
    </section>
  );
};

export default HomeSlider;
