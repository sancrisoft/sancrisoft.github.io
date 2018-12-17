import React from 'react'
import {
  Link,
  graphql
} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title';
// import Testimonial from '../components/testimonial';
import Slider from '../components/slider';

import {
  ContTestimonial,
  Container
} from './styledComponents'

const IndexPage = ( props ) => {
  const {
    data: {
      site: {
        siteMetadata: {
          home: {
            testimonials
          }
        }
      }
    }
  } = props;

  testimonials.map((data) => {
    console.log(data);
    return{

    }
  })

  return(
    <div>
      <Layout>
        <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
        <h1>Home</h1>
        <p>Bienvenido a Sancrisoft</p>
        <Link to="/careers">Careers</Link>
      </Layout>

      <ContTestimonial>
        <Container>
          <Title
            type={2}
            text="Title Testimonial"
          />
          <Slider>
          </Slider>
        </Container>
      </ContTestimonial>
    </div>
  )
}

// Queries for images (One query by image)
export const query = graphql`
query homeQuery {
  site {
    siteMetadata {
      home {
        testimonials {
          description
          name
          date
        }
      }
    }
  }
}
`;

export default IndexPage
