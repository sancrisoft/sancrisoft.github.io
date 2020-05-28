import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import {
  BoxProcess,
  ProcessList,
  ProcessItem,
  ProcessCircle,
  ProcessText
} from './styledComponents.js'

const theme = {
  breakpoints: {
    xs: 480,
    sm: 568,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1500,
  }
};
const Process = ({ t, data }) => {

  const { process } = data;

  return (
    <ThemeProvider theme={theme}>
      <BoxProcess>
        <ProcessList>
          {
            process.map(item => {
              return (
                <ProcessItem key={item.id}>
                  <ProcessCircle>{item.id}</ProcessCircle>
                  <ProcessText>
                    {t(`caseStudies.cases.deliveryapp.process.${item.id}`)}
                  </ProcessText>
                </ProcessItem>
              )
            })
          }
        </ProcessList>
      </BoxProcess>
    </ThemeProvider>
  )
}
;

Process.propTypes = {
  textExperience: PropTypes.string,
  image: PropTypes.object,
};

export default Process
