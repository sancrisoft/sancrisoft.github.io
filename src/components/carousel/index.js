import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  CarouselContainer,
} from './styledComponents';
import Icons from '../icons';

const PrevArrow = ({ className, style, onClick }) => (
  <div className={className} onClick={onClick}>
    <Icons
      backgroundColor={'#FFFFFF'}
      iconName={'left-arrow'}
    />
  </div>
);

const NextArrow = ({ className, style, onClick }) => (
  <div className={className} onClick={onClick}>
    <Icons
      backgroundColor={'#FFFFFF'}
      iconName={'right-arrow'}
    />
  </div>
);

var settings = {
  speed: 750,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

class Carousel extends PureComponent {
  static propTypes = {
    full: PropTypes.bool,
    slidesToShow: PropTypes.number,
    dots: PropTypes.bool,
    arrows: PropTypes.bool,
    fade: PropTypes.bool,
    autoplay: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
  }

  static default

  render() {
    const { 
      children, 
      arrows,
      dots,
      fade,
      autoplay,
      autoplaySpeed
    } = this.props;
    return (
      <CarouselContainer>
        <Slider
          {...settings}
          dots={dots}
          fade={fade}
          autoplay={autoplay}
          autoplaySpeed={autoplaySpeed}
          arrows={arrows && children.length && children.length > 1}
        >
          { children }
        </Slider>
      </CarouselContainer>
    )
  }
}

Carousel.defaultProps = {
  full: false,
  slidesToShow: 1,
  dots: true,
  arrows: true,
  fade: false,
  autoplay: false,
  autoplaySpeed: 4000,
};

export default Carousel;
