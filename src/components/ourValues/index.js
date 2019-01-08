import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'

import Title from '../title'

import {
  ContentOurValue,
  Box,
  BoxImage,
  Boxtitle,
  BoxDesc
} from './styledComponents.js'

const OurValue = ({ description, title, image, contentCustomStyles }) => {
  return (
    <ContentOurValue style={contentCustomStyles}>
      <Box>
        <BoxImage>
          <Img
            sizes={image}
          />
        </BoxImage>
        <Boxtitle>
          <Title
            type={3}
            text={title}
          />
        </Boxtitle>
        <BoxDesc>
          <p>{description}</p>
        </BoxDesc>
      </Box>
    </ContentOurValue>
  )
}

OurValue.defaultProps = {
  contentCustomStyles: {},
};

OurValue.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  contentCustomStyles: PropTypes.object,
};

export default OurValue
