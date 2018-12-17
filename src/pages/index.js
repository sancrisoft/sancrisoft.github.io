import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Testimonial from '../components/testimonial'
import SEO from '../components/seo'
import Carousel from '../components/carousel'

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
    <Carousel />
    <Link to="/careers">Careers</Link>
  </Layout>

  

  <Testimonial></Testimonial>

  </div>
)

export default IndexPage;