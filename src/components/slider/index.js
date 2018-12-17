import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'gatsby'
// Styles Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Item,
  ContentSlider
} from './styledComponents'

export default class SliderTestimonial extends Component {
  render() {
    const settings = {
      autoplay: true,
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
            <Link to="/">
                <h1>1</h1>
            </Link>
          </Item>

          <Item>
            <Link to="/">
                <h1>2</h1>
            </Link>
          </Item>
          <Item>
            <Link to="/">
                <h1>3</h1>
            </Link>
          </Item>
          <Item>
            <Link to="/">
                <h1>4</h1>
            </Link>
          </Item>
          <Item>
            <Link to="/">
                <h1>5</h1>
            </Link>
          </Item>
          <Item>
            <Link to="/">
                <h1>6</h1>
            </Link>
          </Item>
        </Slider>
      </ContentSlider>
    );
  }
}
