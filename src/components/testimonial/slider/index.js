import React, { Component } from "react";
import Slider from "react-slick";
// Styles Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BoxTestimonial from '../box'
import {
  Item,
  ContentSlider
} from './styledComponents'

export default class SliderTestimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <ContentSlider>
        <Slider {...settings}>
          <Item>
            <BoxTestimonial />
          </Item>
          <Item>
            <BoxTestimonial />
          </Item>
          <Item>
            <BoxTestimonial />
          </Item>
          <Item>
            <BoxTestimonial />
          </Item>
          <Item>
            <BoxTestimonial />
          </Item>
          <Item>
            <BoxTestimonial />
          </Item>
        </Slider>
      </ContentSlider>
    );
  }
}
