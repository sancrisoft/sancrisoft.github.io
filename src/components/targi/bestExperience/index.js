import React from 'react'
import Carousel from '../../carousel';

import Meat1 from '../../../images/targi/meat/meat-1.png'
import Fish1 from '../../../images/targi/fish/fish-1.png'
import Veg1 from '../../../images/targi/veg/veg-1.png'
import Frame from '../../../images/targi/frame.png'

import {
  BoxCase,
  ContentTabs,
  TabListCustom,
  TabCustom,
  TabPanelCustom,
  BackgroundItem,
  CarouselItem
} from './styledComponents.js'

const dataCarousel = {
  meat: [
    {
      id: 1,
      urlImage: Meat1,
      name: "Meat 1"
    },
    {
      id: 2,
      urlImage: Frame,
      name: "Frame"
    }
  ],
  fish: [
    {
      id: 1,
      urlImage: Fish1,
      name: "Fish 1"
    },
    {
      id: 2,
      urlImage: Frame,
      name: "Frame"
    }
  ],
  veg: [
    {
      id: 1,
      urlImage: Veg1,
      name: "Veg 1"
    },
    {
      id: 2,
      urlImage: Frame,
      name: "Frame"
    }
  ],
}

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
