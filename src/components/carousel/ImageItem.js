import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

export const query = graphql`
  query imageQuery {
    office:file(relativePath: { eq: "home/gatsby-astronaut.png" }) {
      ...imageFragment
    }
  }
`;

const ImageItem = ({ data }) => {
  console.log(data);
  return (<Img sizes={data.office.childImageSharp.sizes} />);
};

export default ImageItem
