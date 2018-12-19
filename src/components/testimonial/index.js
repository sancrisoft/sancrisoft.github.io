import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'

import Title from '../title';
import Icon from '../icons';
import {
  Box,
  ContDescripcion,
  ContImg,
  ContBox,
} from './styledComponents'



const BoxTestimonial = ({ name, description, image, title }) =>  {
  return(
    <Box>
      <ContDescripcion>
        <div className="quote-left">
          <Icon
            iconName="quote-left"
            backgroundColor="#383938"
            width="35"
            height="35"
          />
        </div>
        <p>{description}</p>
      </ContDescripcion>
      <ContBox>
        <ContImg>
          <Img
            sizes={image}
            style={{maxWidth: "70px"}}
          />
        </ContImg>
        <Title
          type={4}
          text={name}
          color="#383938"
        />
        <span>{title}</span>
      </ContBox>
    </Box>
  )
}

BoxTestimonial.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
};



export default BoxTestimonial
