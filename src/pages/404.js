import React, { Component } from 'react'
import {
  graphql,
} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Content404 } from '../utils/styledComponents'


class NotFoundPage extends Component {
  render() {
    const {
      data,
    } = this.props;

    return(
      <Layout>
        <SEO title="404: Not found" />
        <Content404>
          <Img
            sizes={data.img404.childImageSharp.sizes}
          />
        </Content404>
      </Layout>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query notFoundQuery {
  img404:file(relativePath: { eq: "404/404.png" }) {
    ...imageFragment
  }
}
`;

export default NotFoundPage
