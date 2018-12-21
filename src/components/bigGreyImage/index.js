import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {
  MainContainer,
  GreyFilter,
} from './styledComponents'
import { H2 } from '../styledComponents'

export class BigGreyImage extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    const { title, description, image } = this.props;
    return (
      <MainContainer>
        <GreyFilter />
        <Img className={'image-container'} sizes={image} />
        <div className="detail">
          <H2>{title}</H2>
          <p>{description}</p>
        </div>
      </MainContainer>
    )
  }
}

export default BigGreyImage
