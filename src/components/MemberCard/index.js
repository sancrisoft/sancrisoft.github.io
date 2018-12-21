import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  CardContainer,
  GreyOverlay,
  IconLink,
} from './styledComponents'
import { H3, H4, H6 } from '../styledComponents'
import Img from 'gatsby-image'
import Icon from '../icons'

const renderSocialMedia = (socialMedia) => {
  return socialMedia.map((social) => (
    <IconLink href={social.value} key={social.type}>
      <Icon
        width={25}
        height={25}
        backgroundColor={'#000'}
        iconName={social.type}
      />
    </IconLink>
  ));
}

const MemberCard = ({ image, name, position, message1, message2, socialMedia }) => (
  <CardContainer>
    <Img sizes={image} />
    <div className="first-details">
      <H6>Carlos Gonzalez</H6>
      <span>The fucking best</span>
    </div>
    <GreyOverlay>
      <H6>The best of the fucking best</H6>
      <span>Yet just the only best</span>
      <div className="social-media">
        { renderSocialMedia(socialMedia) }
      </div>
    </GreyOverlay>
  </CardContainer>
);
export default MemberCard
