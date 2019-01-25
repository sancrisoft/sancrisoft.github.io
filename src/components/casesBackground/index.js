import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { ContentBackground } from './styledComponents'

const CasesBackground = ({image}) => {
  return(
    <ContentBackground>
      <Img
        sizes={image}
      />
    </ContentBackground>
  );
}

CasesBackground.propTypes = {
  image: PropTypes.object
};

export default CasesBackground
