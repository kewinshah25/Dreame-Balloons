"use client";

import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutSlider.css";

export default class AboutSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: false,
      prevArrow: false,
    };
    return (
      <div className='container'>
        <Slider {...settings} className='slider-list'>
          <div className='about-slide accent'>
            <h3>Creative approach & attention to detail</h3>
            <p>
              Our specialists offer expert advice and creative ideas for your balloon décor, with meticulous attention to every detail.
            </p>
          </div>
          <div className='about-slide black'>
            <h3>Eco-friendly materials</h3>
            <p>
              We use high-quality materials, including biodegradable balloon options, to minimise our environmental footprint.
            </p>
          </div>
          <div className='about-slide gray'>
            <h3>Wide range of colours for personalisation</h3>
            <p>
              Choose from an extensive colour palette to personalise your décor for any occasion—birthdays, weddings, corporate events, and more.
            </p>
          </div>
          <div className='about-slide light'>
            <h3>Delivery & installation included</h3>
            <p>
              We don’t just deliver—we set up your décor on site and ensure everything looks perfect for your event.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
