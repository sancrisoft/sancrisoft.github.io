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
} from '../Utils/styledComponents'

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
        <SEO title="Home" keywords={['sancrisoft', 'digital-solutions']} />
        <FullItems data={data} />
      </Layout>

      <ContTestimonial>
        <PageSizer>
          <Title
            type={2}
            color="#fff"
            text="Trusted By Our Customers"
          />

          <Carousel
            dots
            slidesToShow={slidesToShow}
            arrowColor="#F28724"
            arrows={false}
            swipeToSlide={true}
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
          title
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
