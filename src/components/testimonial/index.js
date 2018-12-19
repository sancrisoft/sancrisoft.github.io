import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'

import Title from '../title';
import { Box, ContImg } from './styledComponents'

// import imgTest from '../../images/small-logo.png'


const BoxTestimonial = ({ name, description, image, date }) =>  {
  return(
    <Box>
      <ContImg>
        <Img sizes={image} style={{maxWidth: "40px"}} />
      </ContImg>
      <p>{description}</p>
      <Title
        type={4}
        text={name}
        color="#F28724"
      />
      <span>{date}</span>
    </Box>
  )
}

BoxTestimonial.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.object,
};



export default BoxTestimonial
