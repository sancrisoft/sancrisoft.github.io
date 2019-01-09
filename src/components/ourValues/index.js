import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import {ThemeProvider} from 'styled-components'

import Title from '../title'

import {
  ContentOurValue,
  Box,
  BoxImage,
  Boxtitle,
  BoxDesc
} from './styledComponents.js'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 568,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

const OurValue = ({ description, title, image }) => {
  return (
    <ThemeProvider theme={theme}>
      <ContentOurValue>
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
    </ThemeProvider>
  )
}

OurValue.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
};

export default OurValue
