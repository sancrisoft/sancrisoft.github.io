import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import {
  H3,
} from '../styledComponents'; 
import { withNamespaces } from "react-i18next"

const CarouselItem = ({ id, image, type, videoSrc, link, t }) => {
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
          <H3>{t(`home.carousel.${id}.title`)}</H3>
          <span>{t(`home.carousel.${id}.description`)}</span>
          {
            (link) && <Link className="cta" to={link}>{t(`home.carousel.${id}.linkText`)}</Link>
          }
        </div>
      </div>
    </>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  image: PropTypes.object,
  videoSrc: PropTypes.string,
};

export default withNamespaces('translations')(CarouselItem)
