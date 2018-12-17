import PropTypes from 'prop-types'
import React from 'react'
import { H1, H2 } from './styledComponents'

const Title = ({ type, text, align }) => {
    switch(type) {
        case 2 : return (<H2>{text}</H2>);
        default: return (<H1>{text}</H1>);
    }
}

Title.propTypes = {
  type: PropTypes.number,
}

Title.defaultProps = {
  type: 1,
}

export default Title
