import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'

import { Logos
} from './styledComponents'

const LogosSection = ({ image }) =>  {
  return(
    <Logos>
      <Img sizes={image} />
    </Logos>
  )
}

LogosSection.propTypes = {
  image: PropTypes.object,
};



export default LogosSection;
