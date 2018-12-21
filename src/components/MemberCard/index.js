import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  CardContainer,
  GreyOverlay,
} from './styledComponents'
import { H3, H4, H6 } from '../styledComponents'
import Img from 'gatsby-image'

const MemberCard = ({ image, name, position, message1, message2, socialMedia }) => (
  <CardContainer>
    <Img sizes={image} />
    <div className="first-details">
      <H6>Carlos Gonzales</H6>
      <span>The fucking best</span>
    </div>
    <GreyOverlay>
      <H6>The best of the fucking best</H6>
      <span>Yet just the only best</span>
      <div className="social-media">

      </div>
    </GreyOverlay>
  </CardContainer>
);
export default MemberCard
