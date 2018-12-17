import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Carousel from '../carousel';
import {
  BackgroundItem,
  CarouselItem
} from './styledComponents';
import CarouselItemComponent from './CarouselItem';

export class FullItem extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  renderItems = () => {
    const { 
      data,
      data: {
        site: {
          siteMetadata: { 
            home: { carousel }
          }
        }
      }
    } = this.props;
    return carousel.map((carouselItem) => (
      <BackgroundItem key={carouselItem.id}>
        <CarouselItem>
          <CarouselItemComponent 
            {...carouselItem} 
            image={ carouselItem.type === 'image'
              ? data[`office${carouselItem.id}`].childImageSharp.sizes
              : {}
            } 
          />
        </CarouselItem>
      </BackgroundItem>
    ));
  }

  render() {
    return (
      <Carousel
        dots
        arrows
        full
        fade
        autoplay
        autoplaySpeed={4000}
      >
        { this.renderItems() }
      </Carousel>
    )
  }
}

export default FullItem
