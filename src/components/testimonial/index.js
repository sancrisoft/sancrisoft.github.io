import React from 'react'
import PropTypes from 'prop-types';

import { Box } from './styledComponents'

const BoxTestimonial = ({ name, description, date }) => (
  <Box>
    <p>{description}</p>
    <h3>{name}</h3>
    <span>{date}</span>
  </Box>
)

BoxTestimonial.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};


export default BoxTestimonial
