import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
    <h1>Home</h1>
    <p>Bienvenido a Sancrisoft</p>
    <Link to="/careers">Careers</Link>
  </Layout>
)

export default IndexPage