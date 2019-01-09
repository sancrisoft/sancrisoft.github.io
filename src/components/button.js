import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styledComponents'

const PressButton = ({ text, color, background, size, padding }) => {
  return(
    <Button
      style={{
        color: `${color}`,
        background: `${background}`,
        fontSize: `${size}`,
        padding: `${padding}`,
      }}
    >
      {text}
    </Button>
  )
}

PressButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  background: PropTypes.string
}

PressButton.defaultProps = {
  color: "#fff",
  background: "#F28724",
  text: "Get a Quote",
  size: "14px",
  padding: "10px 20px"
}

export default PressButton
