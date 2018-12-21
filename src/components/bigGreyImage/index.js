import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { translate } from 'react-i18next'
import {
  MainContainer,
  GreyFilter,
} from './styledComponents'
import { H2 } from '../styledComponents'

export class BigGreyImage extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
  }

  render() {
    const { image, t } = this.props;
    return (
      <MainContainer>
        <GreyFilter />
        <Img className={'image-container'} sizes={image} />
        <div className="detail">
          <H2>{t('bigImage.title')}</H2>
          <p>{t('bigImage.description')}</p>
        </div>
      </MainContainer>
    )
  }
}

export default translate("translations")(BigGreyImage)
