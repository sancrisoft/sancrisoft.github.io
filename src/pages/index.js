import React from 'react'
import {
  graphql,
} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title';
import Testimonial from '../components/testimonial'
import FullItems from '../components/fullItems'
import Carousel from '../components/carousel'
import ViewPort from '../components/HOC/withViewportHandler'
import { I18nextProvider } from "react-i18next";
import i18n from '../data/home.js';

import { PageSizer } from '../components/styledComponents'
import MapSelector from '../components/mapSelector'
import Process from '../components/process'
import { H3 } from '../components/styledComponents'
import {
  ContTestimonial,
  WhatWeDo,
} from '../utils/styledComponents'

const IndexPage = (props) => {

  const renderItems = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            home: {
              testimonials,
            }
          }
        }
      },
      data
    } = props;

    const newArray = testimonials.map((item) => {
      const {
        id,
        name,
        description,
        title,
      } = item;

      return (
        <Testimonial
          key={id}
          name={name}
          description={description}
          title={title}
          image={data[`Testimonial${id}`].childImageSharp.sizes}
        />

      )
    });
    return newArray;

  }

  const renderProcesses = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            home: {
              processes,
            }
          }
        }
      },
      data
    } = props;
    return processes.map((process) => <Process key={process.id} data={data} process={process} />);
  }

  const {
    data,
    data: {
      site: {
        siteMetadata: {
          home: {
            offices,
          }
        }
      }
    },
    viewport: {
      isMobileView,
      isTabletView
    }
  } = props;

  let slidesToShow = (isMobileView) ? 1 : 3;
  slidesToShow = (isTabletView) ? 2 : slidesToShow;

  console.log('I18');
    console.log(i18n)

  return(
    <I18nextProvider i18n={i18n}>
      <Layout>
        <SEO title="Home" keywords={['sancrisoft', 'digital-solutions']} />
        <FullItems data={data} />
        {
          /*
          <WhatWeDo>
          <H3>Que hacemos</H3>
          <div className="processes">
            { renderProcesses() }
          </div>
        </WhatWeDo>
          */
        }
      </Layout>
      {
        /*
        <ContTestimonial>
        <PageSizer>
          <Title
            type={2}
            color="#fff"
            text="Trusted by our customers"
          />
          <Carousel
            dots
            slidesToShow={slidesToShow}
            arrowColor="#F28724"
            arrows={false}
            autoplay
          >
            { renderItems() }
          </Carousel>

        </PageSizer>
      </ContTestimonial>
      <MapSelector offices={offices} />
        */
      }
      
    </I18nextProvider>
  )
}

// Queries for images (One query by image)
export const query = graphql`
query homeQuery {
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
  Testimonial1:file(relativePath: { eq: "home/foto1.jpg" }) {
    ...imageFragment
  }
  Testimonial2:file(relativePath: { eq: "home/foto3.jpg" }) {
    ...imageFragment
  }
  Testimonial3:file(relativePath: { eq: "home/foto5.jpg" }) {
    ...imageFragment
  }
  Testimonial4:file(relativePath: { eq: "home/foto4.jpg" }) {
    ...imageFragment
  }
  Testimonial5:file(relativePath: { eq: "home/foto2.jpg" }) {
    ...imageFragment
  }
  Testimonial6:file(relativePath: { eq: "home/foto6.jpg" }) {
    ...imageFragment
  }
  react:file(relativePath: { eq: "home/react.png" }) {
    ...imageFragment
  }
  redux:file(relativePath: { eq: "home/redux.png" }) {
    ...imageFragment
  }
  material:file(relativePath: { eq: "home/material.png" }) {
    ...imageFragment
  }
  styled:file(relativePath: { eq: "home/styled.png" }) {
    ...imageFragment
  }
  webpack:file(relativePath: { eq: "home/webpack.png" }) {
    ...imageFragment
  }
  android:file(relativePath: { eq: "home/android.png" }) {
    ...imageFragment
  }
  ios:file(relativePath: { eq: "home/ios.png" }) {
    ...imageFragment
  }
  web:file(relativePath: { eq: "home/web.png" }) {
    ...imageFragment
  }
  mobile:file(relativePath: { eq: "home/mobile.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      home {
        carousel {
          id
          type
          videoSrc
          link
        },
        testimonials {
          id
          name
        },
        offices {
          id
          title
          address1
          address2
          state
          postalCode
          latitude
          longitude
        }
        processes {
          id
          technologies {
            id
            tooltip
            color
          }
        }
      }
    }
  }
}
`;

export default ViewPort(IndexPage)
