import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import {
  ContentTecnology,
} from './styledComponents'

const CasesTecnology = ({text, image}) => {
  return(
    <ContentTecnology>
      <Img
        sizes={image}
      />
      <span>{text}</span>
    </ContentTecnology>
  );
}

CasesTecnology.propTypes = {
  text: PropTypes.string,
  image: PropTypes.object
};

export default CasesTecnology
