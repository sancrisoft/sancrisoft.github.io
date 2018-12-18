import React from 'react'
import {
  graphql
} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title';
import Testimonial from '../components/testimonial';
import FullItems from '../components/fullItems'
import Carousel from '../components/carousel'
import ViewPort from '../components/HOC/withViewportHandler'

import { PageSizer } from '../components/styledComponents'
import MapSelector from '../components/mapSelector'

import {
  ContTestimonial
} from './styledComponents'

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
        date,
      } = item;

      return (
        <Testimonial
          key={id}
          name={name}
          description={description}
          date={date}
          image={data[`Testimonial${id}`].childImageSharp.sizes}
        />

      )
    });
    return newArray;

  }

  const {
    data,
    data: {
      site: {
        siteMetadata: {
          home: {
            offices
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

  return(
    <div>
      <Layout>
        <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
        <FullItems data={data} />
      </Layout>

      <ContTestimonial>
        <PageSizer>
          <Title
            type={2}
            color="#fff"
            text="Title Testimonial"
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
    </div>
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
  Testimonial1:file(relativePath: { eq: "home/small-logo.png" }) {
    ...imageFragment
  }
  Testimonial2:file(relativePath: { eq: "home/logo-google.png" }) {
    ...imageFragment
  }
  Testimonial3:file(relativePath: { eq: "home/logo-face.png" }) {
    ...imageFragment
  }
  Testimonial4:file(relativePath: { eq: "home/logo-youtube.png" }) {
    ...imageFragment
  }
  Testimonial5:file(relativePath: { eq: "home/logo-ibm.png" }) {
    ...imageFragment
  }
  Testimonial6:file(relativePath: { eq: "home/logo-git.png" }) {
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
          videoSrc
          link
          linkText
        },
        testimonials {
          id
          description
          name
          date
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
      }
    }
  }
}
`;

export default ViewPort(IndexPage)
