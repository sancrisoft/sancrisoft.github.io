import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {
  MainContainer,
  GreyFilter,
} from './styledComponents'
import { H2 } from '../styledComponents'

const BigGreyImage = ({ title, description, image }) => (
  <MainContainer>
    <GreyFilter />
    <Img className={'image-container'} sizes={image} />
    <div className="detail">
      <H2>{title}</H2>
      <p>{description}</p>
    </div>
  </MainContainer>
);

BigGreyImage.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BigGreyImage
