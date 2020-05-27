import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { ThemeProvider } from 'styled-components'



import {
  BoxCase,
  BoxImage,
  BoxDesc,
} from './styledComponents.js'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 568,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1500,
  }
};
const LittleSatisfied = ({ textExperience, image }) => {
  return (
    <ThemeProvider theme={theme}>
      <BoxCase>
        <BoxImage>
          <Img
            sizes={image}
          />
        </BoxImage>
        <BoxDesc>
          <p>{textExperience}</p>
        </BoxDesc>
      </BoxCase>
    </ThemeProvider>
  )
}
;

LittleSatisfied.propTypes = {
  textExperience: PropTypes.string,
  image: PropTypes.object,
};

export default LittleSatisfied
