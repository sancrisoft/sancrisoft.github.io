import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const CarouselItem = ({ id, title, description, image, type }) => {

  const renderContent = () => {
    switch(type) {
      case 'image':
        return <Img sizes={image} />;
      case 'video': 
        return (
          <video autoPlay muted loop>
            <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        );
      default:
        return null;
    }
  }

  return (
    <>
      <div className={'grey-filter'} />
      { renderContent() }
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



export default CarouselItem
