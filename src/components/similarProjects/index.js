import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import {ThemeProvider} from 'styled-components'

import Title from '../title';

import {
  Box,
  BoxImage,
  ContentBox,
  A,
} from './styledComponents'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 568,
    md: 768,
    lg: 1024,
    xl: 1400
  }
};


const Similar = ({ name, image, type, link }) =>  {
  return(
    <ThemeProvider theme={theme}>
      <Box>
        <A href={link} >
          <BoxImage>
            <Img sizes={image} />
            <ContentBox>
              <Title
                type={4}
                text={name}
                color="#fff"
                align="left"
              />
            <span>{type}</span>
            </ContentBox>
          </BoxImage>
        </A>
      </Box>
    </ThemeProvider>
  )
}

Similar.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.object,
};



export default Similar;
