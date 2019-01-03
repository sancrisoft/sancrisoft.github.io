import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { Spring } from 'react-spring'
import {
  H3,
} from '../styledComponents'; 
import { translate } from "react-i18next"

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
    <Spring from={{ opacity: 0, marginRight: -1000 }} to={{ opacity: 1, marginRight: 0 }}>
      { props => (
        <>
          <div className={'grey-filter'} />
          { renderContent() }
          <div className={'detail-container'}>
            <div className={'detail'} style={props}>
              <H3>{t(`home.carousel.${id}.title`)}</H3>
              <span>{t(`home.carousel.${id}.description`)}</span>
              {
                (link) && <Link to={link}>{t(`home.carousel.${id}.linkText`)}</Link>
              }
            </div>
          </div>
        </>
      )}
    </Spring>
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

export default translate('translations')(CarouselItem)
