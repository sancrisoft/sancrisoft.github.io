import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import {ThemeProvider} from 'styled-components'

import Title from '../title';
// import Icon from '../icons';
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


const Proyect = ({ name, image, type, active, url }) =>  {
  return(
    <ThemeProvider theme={theme}>
      <Box
        style={{display: active ? 'none' : 'block' }}
      >
        <A href={url} >
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

Proyect.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
  active: PropTypes.bool,
  image: PropTypes.object,
};



export default Proyect;
