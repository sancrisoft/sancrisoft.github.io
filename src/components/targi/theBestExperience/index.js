import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { ThemeProvider } from 'styled-components'

import Carousel from '../../carousel';

import {
  BoxCase,
  ContentTabs,
  TabListCustom,
  TabCustom,
  TabPanelCustom,
  BackgroundItem,
  CarouselItem
} from './styledComponents.js'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 568,
    md: 768,
    lg: 992,
    tablet: 768,
    desktop: 991,
    xl: 1200,
    xxl: 1500,
  }
};

const renderImagesCarousel = (data, items) => {
  return items.map((carouselItem) => (
    <BackgroundItem key={carouselItem.id}>
      <CarouselItem>
        <Img sizes={data[`${carouselItem.name}`].childImageSharp.sizes} />
      </CarouselItem>
    </BackgroundItem>
  ));
}

const TheBestExperience = ({ t, itemsMeat, itemsFish, itemsVeg, data }) => {


  return (
    <ThemeProvider theme={theme}>
      <BoxCase>
        <ContentTabs>
          <TabListCustom>
            <TabCustom>{t(`caseStudies.cases.deliveryapp.theBestExperience.titleCarniceria`)}</TabCustom>
            <TabCustom>{t(`caseStudies.cases.deliveryapp.theBestExperience.titlePescaderia`)}</TabCustom>
            <TabCustom>{t(`caseStudies.cases.deliveryapp.theBestExperience.titleFruver`)}</TabCustom>
          </TabListCustom>
      
          <TabPanelCustom>
            <Carousel
              dots={false}
              arrows
              fade
              autoplay
              autoplaySpeed={4000}
            >
              { renderImagesCarousel(data, itemsMeat) }
            </Carousel>
          </TabPanelCustom>

          <TabPanelCustom>
            <Carousel
              dots={false}
              arrows
              fade
              autoplay
              autoplaySpeed={4000}
            >
              { renderImagesCarousel(data, itemsFish) }
            </Carousel>
          </TabPanelCustom>

          <TabPanelCustom>
            <Carousel
              dots={false}
              arrows
              fade
              autoplay
              autoplaySpeed={4000}
            >
              { renderImagesCarousel(data, itemsVeg) }
            </Carousel>
          </TabPanelCustom>
        </ContentTabs>
      </BoxCase>
    </ThemeProvider>
  )
}
;

TheBestExperience.propTypes = {
  textExperience: PropTypes.string,
  image: PropTypes.object,
};

export default TheBestExperience
