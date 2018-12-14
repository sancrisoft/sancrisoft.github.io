import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const IndexPage = ({ data }) => {
  console.log(data);
  return (
  <Layout>
    <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
    <h1>Careers {data.site.siteMetadata.title}</h1>
    <Img sizes={data.astronaut.childImageSharp.sizes}  style={{ width: "100%" }} />
    <Img sizes={data.icon.childImageSharp.sizes}  style={{ width: "100%" }} />
  </Layout>);
}

// Queries for images (One query by image)
export const query = graphql`
query portfolioQuery {
  astronaut:file(relativePath: { eq: "home/gatsby-astronaut.png" }) {
    ...imageFragment
  }
  icon:file(relativePath: { eq: "gatsby-icon.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      title
    }
  }
}
`;

export default IndexPage