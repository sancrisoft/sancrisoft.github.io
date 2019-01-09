import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'

import Title from '../title'

import {
  ContentOurValue,
  Box,
  BoxImage,
  Boxtitle,
  BoxDesc,
  DescContainer,
} from './styledComponents.js'

const OurValue = ({ description, title, image, contentCustomStyles, descDirection, chipOn }) => {
  return (
    <ContentOurValue style={contentCustomStyles}>
      <Box direction={descDirection}>
        <BoxImage round={chipOn}>
          <Img
            sizes={image}
          />
        </BoxImage>
        <DescContainer direction={descDirection}>
          <Boxtitle>
            <Title
              type={chipOn ? 6 : 3}
              text={title}
            />
          </Boxtitle>
          <BoxDesc>
            <p>{description}</p>
          </BoxDesc>
        </DescContainer> 
      </Box>
    </ContentOurValue>
  )
}

OurValue.defaultProps = {
  contentCustomStyles: {},
  descDirection: 'column',
  chipOn: false,
};

OurValue.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  contentCustomStyles: PropTypes.object,
  descDirection: PropTypes.string,
  chipOn: PropTypes.bool,
};

export default OurValue
