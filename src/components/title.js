import PropTypes from 'prop-types'
import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from './styledComponents'

const Title = ({ type, text, align }) => {
    switch(type) {
        case 2 : return (<H2>{text}</H2>);
        case 3 : return (<H3>{text}</H3>);
        case 4 : return (<H4>{text}</H4>);
        case 5 : return (<H5>{text}</H5>);
        case 6 : return (<H6>{text}</H6>);
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
