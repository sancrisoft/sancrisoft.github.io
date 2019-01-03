import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styledComponents'

const PressButton = ({ text, color, background }) => {
  return(
    <Button
      style={{
        color: `${color}`,
        background: `${background}`
      }}
    >
      {text}
    </Button>
  )
}

PressButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  background: PropTypes.string
}

PressButton.defaultProps = {
  color: "#fff",
  background: "#F28724",
  text: "Get a Quote"
}

export default PressButton
