import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const CarouselItem = ({ id, title, description, image, type, videoSrc, link, linkText }) => {

  const renderContent = () => {
    switch(type) {
      case 'image':
        return <Img sizes={image} />;
      case 'video': 
        return (
          <video autoPlay muted loop>
            <source src={videoSrc} type="video/mp4" />
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
          <Link to={link}>{linkText}</Link>
        </div>
      </div>
    </>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  image: PropTypes.object,
  videoSrc: PropTypes.string,
};

export default CarouselItem
