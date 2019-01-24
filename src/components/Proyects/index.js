import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'

import Title from '../title';
// import Icon from '../icons';
import {
  Box,
  BoxImage,
  ContentBox,
} from './styledComponents'


const Proyect = ({ name, image, type, active }) =>  {
  return(
    <Box
      style={{display: active ? 'none' : 'block' }}
    >
      <BoxImage>
        <Img sizes={image} />
        <ContentBox>
          <Title
            type={4}
            text={name}
            color="#fff"
            align="left"
          />
          <span>{type}</span>
        </ContentBox>
      </BoxImage>
    </Box>
  )
}

Proyect.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  active: PropTypes.bool,
  image: PropTypes.object,
};



export default Proyect;
