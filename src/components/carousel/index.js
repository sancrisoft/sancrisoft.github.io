import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  CarouselContainer,
  BackgroundItem,
  FakeItem,
} from './styledComponents';

import ImageItem from './ImageItem';

var settings = {
  dots: true,
  speed: 500,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

class Carousel extends Component {
  render() {
    return (
      <CarouselContainer>
        <Slider {...settings}>
          <BackgroundItem>
            <FakeItem color={'red'} />
          </BackgroundItem>
          <BackgroundItem>
            <FakeItem color={'blue'} />
          </BackgroundItem>
          <BackgroundItem>
            <FakeItem color={'yellow'} />
          </BackgroundItem>
          <BackgroundItem>
            <FakeItem color={'pink'} />
          </BackgroundItem>
          <BackgroundItem>
            <FakeItem color={'orange'} />
          </BackgroundItem>
          <BackgroundItem>
            <FakeItem color={'grey'} />
          </BackgroundItem>
        </Slider>
      </CarouselContainer>
    )
  }
}

export default Carousel;
