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
  BoxDesc,
  DescContainer,
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
const OurValue = ({ description, title, image, contentCustomStyles, descDirection }) => {
  const little = descDirection === 'row';
  return (
    <ThemeProvider theme={theme}>
      <ContentOurValue style={contentCustomStyles}>
        <Box direction={descDirection}>
          <BoxImage little={little}>
            <Img
              sizes={image}
            />
          </BoxImage>
          <DescContainer direction={descDirection}>
            <Boxtitle>
              <Title
                type={little ? 6 : 3}
                text={title}
              />
            </Boxtitle>
            <BoxDesc>
              <p>{description}</p>
            </BoxDesc>
          </DescContainer>
        </Box>
      </ContentOurValue>
    </ThemeProvider>
  )
}

OurValue.defaultProps = {
  contentCustomStyles: {},
  descDirection: 'column',
};

OurValue.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  contentCustomStyles: PropTypes.object,
  descDirection: PropTypes.string,
};

export default OurValue
