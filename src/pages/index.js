import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Testimonial from '../components/testimonial'
import SEO from '../components/seo'

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
    <h1>Home</h1>
    <p>Bienvenido a Sancrisoft</p>
    <Link to="/careers">Careers</Link>
  </Layout>

  

  <Testimonial></Testimonial>

  </div>
)

export default IndexPage
