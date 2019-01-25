import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'

import { Logos
} from './styledComponents'

const LogosSection = ({ image, active }) =>  {
  return(
    <Logos style={{display: active ? 'none' : 'block' }}>
      <Img sizes={image} />
    </Logos>
  )
}

LogosSection.propTypes = {
  image: PropTypes.object,
  active: PropTypes.bool,
};



export default LogosSection;
