import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser';
import {
  PositionDetailsContainer,
  Title,
  Description,
} from './styledComponents.js'
import Img from 'gatsby-image'

const PositionDetails = ({ title, image, description }) => {
  return (
    <PositionDetailsContainer>
      <Title>{title}</Title>
      <Img sizes={image} />
      <Description>
        {ReactHtmlParser(description)}
      </Description>
    </PositionDetailsContainer>
  )
}

PositionDetails.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

export default PositionDetails
