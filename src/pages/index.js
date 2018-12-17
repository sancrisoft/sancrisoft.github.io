import React from 'react'
import {
  Link,
  graphql
} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title';
import Testimonial from '../components/testimonial';
import FullItems from '../components/fullItems'

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
    },
    data
  } = props;

  testimonials.map((data) => {
    const {
      name,
      description,
      date,
    } = data;
    return(
      <Testimonial
        name={name}
        description={description}
        date={date}
      />
    )
  })

  return(
    <div>
      <Layout>
        <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
        <FullItems data={data} />
        <Link to="/careers">Careers</Link>
      </Layout>

      <ContTestimonial>
        <Container>
          <Title
            type={2}
            text="Title Testimonial"
          />

        </Container>
      </ContTestimonial>
    </div>
  )
}

// Queries for images (One query by image)
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
          videoSrc
          link
          linkText
        },
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
