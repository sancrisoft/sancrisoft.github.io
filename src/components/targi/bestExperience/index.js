import React from 'react'
import Carousel from '../../carousel';

import { dataCarousel } from './data'

import {
  BoxCase,
  ContentTabs,
  TabListCustom,
  TabCustom,
  TabPanelCustom,
  BackgroundItem,
  CarouselItem
} from './styledComponents.js'

const renderImagesCarousel = (data) => {
  return data.map((carouselItem) => {
    const {
      urlImage,
      name
    } = carouselItem;
    return (
      <BackgroundItem key={carouselItem.id}>
        <CarouselItem>
          <img src={urlImage} alt={name} />
        </CarouselItem>
      </BackgroundItem>
    )
  });
}

const BestExperience = () => {

  return (
      <BoxCase>
        <ContentTabs>
          <TabListCustom>
            <TabCustom>Carnicerías</TabCustom>
            <TabCustom>Pescaderías</TabCustom>
            <TabCustom>Fruvers</TabCustom>
          </TabListCustom>
      
          <TabPanelCustom>
            <Carousel
              dots={false}
              arrows
              fade
              autoplay
              autoplaySpeed={4000}
            >
              { renderImagesCarousel(dataCarousel.meat) }
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
              { renderImagesCarousel(dataCarousel.fish) }
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
              { renderImagesCarousel(dataCarousel.veg) }
            </Carousel>
          </TabPanelCustom>

        </ContentTabs>
      </BoxCase>
  )
}

export default BestExperience;
