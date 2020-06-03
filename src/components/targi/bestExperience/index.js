import React from 'react'
import Img from 'gatsby-image'
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

const renderImagesCarousel = (data, items) => {
  return items.map((carouselItem) => (
    <BackgroundItem key={carouselItem.id}>
      <CarouselItem>
        <Img sizes={data[`${carouselItem.name}`].childImageSharp.sizes} />
      </CarouselItem>
    </BackgroundItem>
  ));
}

const BestExperience = () => {

  return (<div></div>
    //   <BoxCase>
    //     <ContentTabs>
    //       <TabListCustom>
    //         <TabCustom>{t(`caseStudies.cases.deliveryapp.theBestExperience.titleCarniceria`)}</TabCustom>
    //         <TabCustom>{t(`caseStudies.cases.deliveryapp.theBestExperience.titlePescaderia`)}</TabCustom>
    //         <TabCustom>{t(`caseStudies.cases.deliveryapp.theBestExperience.titleFruver`)}</TabCustom>
    //       </TabListCustom>
      
    //       <TabPanelCustom>
    //         <Carousel
    //           dots={false}
    //           arrows
    //           fade
    //           autoplay
    //           autoplaySpeed={4000}
    //         >
    //           { renderImagesCarousel(data, itemsMeat) }
    //         </Carousel>
    //       </TabPanelCustom>

    //       <TabPanelCustom>
    //         <Carousel
    //           dots={false}
    //           arrows
    //           fade
    //           autoplay
    //           autoplaySpeed={4000}
    //         >
    //           { renderImagesCarousel(data, itemsFish) }
    //         </Carousel>
    //       </TabPanelCustom>

    //       <TabPanelCustom>
    //         <Carousel
    //           dots={false}
    //           arrows
    //           fade
    //           autoplay
    //           autoplaySpeed={4000}
    //         >
    //           { renderImagesCarousel(data, itemsVeg) }
    //         </Carousel>
    //       </TabPanelCustom>
    //     </ContentTabs>
    //   </BoxCase>
  )
}

export default BestExperience;
