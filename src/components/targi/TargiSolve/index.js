import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { ThemeProvider } from 'styled-components'

import Title from '../../title'

import {
  BoxCase,
  Box,
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
const TargiSolve = ({ titleSolution, textSolution, image }) => {
  return (
    <ThemeProvider theme={theme}>
      <BoxCase>
        <Box>
          <BoxImage>
            <Img
              sizes={image}
            />
          </BoxImage>
          <BoxDesc>
            <Title
              text={titleSolution}
              type={3}
            />
          </BoxDesc>
        </Box>
        <p className="textOut">{textSolution}</p>
      </BoxCase>
    </ThemeProvider>
  )
}
;

TargiSolve.propTypes = {
  textExperience: PropTypes.string,
  image: PropTypes.object,
};

export default TargiSolve
