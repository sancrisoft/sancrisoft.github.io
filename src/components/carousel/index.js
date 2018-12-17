import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { StaticQuery, graphql } from 'gatsby'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {
  CarouselContainer,
  BackgroundItem,
  CarouselItem,
} from './styledComponents';

import CarouselItemComponent from './CarouselItem';
import Icons from '../icons';

const PrevArrow = ({ className, style, onClick }) => (
  <div className={className} onClick={onClick}>
    <Icons
      backgroundColor={'#FFFFFF'}
      iconName={'left-arrow'}
      width={36}
      height={36}
    />
  </div>
);

const NextArrow = ({ className, style, onClick }) => (
  <div className={className} onClick={onClick}>
    <Icons
      backgroundColor={'#FFFFFF'}
      iconName={'right-arrow'}
      width={36}
      height={36}
    />
  </div>
);

var settings = {
  dots: true,
  speed: 750,
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

export const query = graphql`
  query imageQuery {
    office1:file(relativePath: { eq: "home/carousel/office-1.jpg" }) {
      ...imageFragment
    }
    office2:file(relativePath: { eq: "home/carousel/office-2.jpg" }) {
      ...imageFragment
    }
    office3:file(relativePath: { eq: "home/carousel/office-3.jpg" }) {
      ...imageFragment
    }
    office4:file(relativePath: { eq: "home/carousel/office-4.jpg" }) {
      ...imageFragment
    }
    office5:file(relativePath: { eq: "home/carousel/office-5.jpg" }) {
      ...imageFragment
    }
    office6:file(relativePath: { eq: "home/carousel/office-6.jpg" }) {
      ...imageFragment
    }
    site {
      siteMetadata {
        home {
          carousel {
            id
            title
            description
            type
          }
        }
      }
    }
  }
`;

class Carousel extends Component {

  renderItems = (data) => {
    const { site: { siteMetadata: { home: { carousel }}}} = data;
    return carousel.map((carouselItem) => (
      <BackgroundItem key={carouselItem.id}>
        <CarouselItem>
          <CarouselItemComponent 
            {...carouselItem} 
            image={data[`office${carouselItem.id}`].childImageSharp.sizes} 
          />
        </CarouselItem>
      </BackgroundItem>
    ));
  }

  render() {
    return (
      <StaticQuery
        query={query}
        render={(data) => {
          console.log(data);
          return(
            <CarouselContainer>
              <Slider {...settings}>
                { this.renderItems(data) }
              </Slider>
            </CarouselContainer>
          )
        }}
      >
      </StaticQuery>
    )
  }
}

export default Carousel;
