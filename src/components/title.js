import PropTypes from 'prop-types'
import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from './styledComponents'

const Title = ({ type, text, color, align }) => {
    switch(type) {
        case 2 :
          return (
            <H2
              style={{
                color: `${color}`,
                textAlign: `${align}`
              }}>
              {text}
            </H2>
          );
        case 3 :
          return (
            <H3
              style={{
                color: `${color}`,
                textAlign: `${align}`
              }}>
              {text}
            </H3>
          );
        case 4 :
          return (
            <H4
              style={{
                color: `${color}`,
                textAlign: `${align}`
              }}>
              {text}
            </H4>
          );
        case 5 :
          return (
            <H5
              style={{
                color: `${color}`,
                textAlign: `${align}`
              }}>
              {text}
            </H5>
          );
        case 6 :
          return (
            <H6
              style={{
                color: `${color}`,
                textAlign: `${align}`
              }}>
              {text}
            </H6>
          );
        default:
          return (
            <H1
              style={{
                color: `${color}`,
                textAlign: `${align}`
              }}>
              {text}
            </H1>
          );
    }
}

Title.propTypes = {
  type: PropTypes.number,
  color: PropTypes.string,
  align: PropTypes.string
}

Title.defaultProps = {
  type: 1,
  color: "#333",
  align: "center"
}

export default Title
