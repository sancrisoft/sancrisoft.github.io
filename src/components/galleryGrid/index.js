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
    })),
  }

  renderGridImages = () => {
    const { images } = this.props;
    return images.map((image) => (
      <ImageContainer 
        key={image.id}
        colSpan={image.colSpan}
        rowSpan={image.rowSpan}
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
