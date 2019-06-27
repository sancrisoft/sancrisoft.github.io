import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  CarouselContainer,
} from './styledComponents';
import Icons from '../icons';

const PrevArrow = ({ className, style, onClick, backgroundColor }) => (
  <div className={className} onClick={onClick}>
    <Icons
      backgroundColor={backgroundColor}
      iconName={'left-arrow'}
    />
  </div>
);

const NextArrow = ({ className, style, onClick, backgroundColor }) => (
  <div className={className} onClick={onClick}>
    <Icons
      backgroundColor={backgroundColor}
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
  lazyLoad: true,
  responsive: []
};

class Carousel extends PureComponent {
  static propTypes = {
    full: PropTypes.bool,
    slidesToShow: PropTypes.number,
    dots: PropTypes.bool,
    arrows: PropTypes.bool,
    fade: PropTypes.bool,
    autoplay: PropTypes.bool,
    swipeToSlide: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
    arrowColor: PropTypes.string,
    responsive: PropTypes.array
  }

  render() {
    const {
      children,
      arrows,
      dots,
      fade,
      autoplay,
      autoplaySpeed,
      slidesToShow,
      arrowColor,
      swipeToSlide,
      full,
      responsive
    } = this.props;
    return (
      <CarouselContainer full={full}>
        <Slider
          {...settings}
          dots={dots}
          fade={fade}
          autoplay={autoplay}
          autoplaySpeed={autoplaySpeed}
          slidesToShow={slidesToShow}
          arrows={arrows && children.length && children.length > 1}
          nextArrow={<NextArrow backgroundColor={arrowColor} />}
          prevArrow={<PrevArrow backgroundColor={arrowColor} />}
          swipeToSlide={swipeToSlide}
          responsive={responsive}
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
  swipeToSlide: false,
  autoplaySpeed: 4000,
  arrowColor: '#FFFFFF',
};

export default Carousel;
