import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Testimonial from '../components/testimonial'
import SEO from '../components/seo'
import FullItems from '../components/fullItems'

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
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <div>
    <Layout>
      <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
      <FullItems data={data} />
      <Link to="/careers">Careers</Link>
    </Layout>
    <Testimonial></Testimonial>
  </div>
)

export default IndexPage;