import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import {
  GridContainer,
  ImageContainer,
} from './styledComponents'

export class index extends PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.id,
      sizes: PropTypes.object,
      colSpan: PropTypes.number,
      rowSpan: PropTypes.number,
      mobileColSpan: PropTypes.number,
      mobileRowSpan: PropTypes.number,
      tabletColSpan: PropTypes.number,
      tabletRowSpan: PropTypes.number,
    })),
  }

  renderGridImages = () => {
    const { images } = this.props;
    return images.map((image) => (
      <ImageContainer 
        key={image.id}
        colSpan={image.colSpan}
        rowSpan={image.rowSpan}
        mobileColSpan={image.mobileColSpan}
        mobileRowSpan={image.mobileRowSpan}
        tabletColSpan={image.tabletColSpan}
        tabletRowSpan={image.tabletRowSpan}
      >
        <Img sizes={image.sizes}></Img>
      </ImageContainer>
    ));
  }

  render() {
    return (
      <GridContainer>
        { this.renderGridImages() }
      </GridContainer>
    )
  }
}

export default index
