import React from 'react'
import PropTypes from 'prop-types'
import {
  CardContainer,
  GreyOverlay,
  IconLink,
} from './styledComponents'
import { H6 } from '../styledComponents'
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
      <H6>{name}</H6>
      <span>{position}</span>
    </div>
    <GreyOverlay>
      <H6>{message1}</H6>
      <span>{message2}</span>
      <div className="social-media">
        { renderSocialMedia(socialMedia) }
      </div>
    </GreyOverlay>
  </CardContainer>
);

MemberCard.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  message1: PropTypes.string.isRequired,
  message2: PropTypes.string.isRequired,
  socialMedia: PropTypes.array.isRequired,
};

export default MemberCard
