import React from 'react'
import PropTypes from 'prop-types';

import Title from '../title';

import { Box } from './styledComponents'

const BoxTestimonial = ({ name, description, date }) => (
  <Box>
    <p>{description}</p>
    <Title
      type={4}
      text={name}
    />
    <span>{date}</span>
  </Box>
)

BoxTestimonial.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};


export default BoxTestimonial
