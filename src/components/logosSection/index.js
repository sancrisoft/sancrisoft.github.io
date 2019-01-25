import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'

import {
  Logos,
  A
} from './styledComponents'

const LogosSection = ({ image, active, url }) =>  {
  return(
    <Logos style={{display: active ? 'none' : 'block' }}>
      <A href={url}>
        <Img sizes={image} />
      </A>
    </Logos>
  )
}

LogosSection.propTypes = {
  image: PropTypes.object,
  url: PropTypes.string,
  active: PropTypes.bool,
};



export default LogosSection;
