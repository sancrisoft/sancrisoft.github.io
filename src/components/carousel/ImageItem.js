import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const ImageItem = ({ id, title, description, image }) => {
  return (
    <>
      <div className={'grey-filter'} />
      <Img sizes={image} />
      <div className={'detail-container'}>
        <div className={'detail'}>
          <h3>{title}</h3>
          <span>{description}</span>
          <Link to="/careers">Link arrechisimo</Link>
        </div>
      </div>
    </>
  );
};



export default ImageItem
