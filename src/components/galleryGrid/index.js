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

/* 

  How to use 'teamPhotos' layout system 

  The Team photos section is made using a CSS Grid
  In order to make items take certain percent or cols, or rows of the Grid you need to know
  how many rows or cols are in the grid in the current viewport
  Desktop: 4 columns, implicit rows
  Tablet: 2 columns, implicit rows
  Phone: 1 colum, implicit rows

  With implicit rows, we mean that tha rows are created on demand, it means, as it needs
  The default row and col values for an item are 1x1, it means that if you don't define a PAIR of values
  for a specific viewport: Desktop, mobile or tablet, the default will be 1x1, if you define a col value,
  you need to specify the row value as well

  The Grid will make the items to take that many rows or cols that you specified, for example, if there
  are 5 items in the grid, and the first one is 2x2, and the other ones don't specify values for cols and rows
  the Grid will place the first item to consume 2x2, and the rest being 1x1 will fit like so:

  p1 p1 p2 p3
  p1 p1 p4 p5

  It's important to note that the Grid will increase the height of itself as it needs, but the items won't grow
  automatically, you need to specify explicitly, taking the previous example, if we now have 3 items instead of 
  5, the Grid will be something like:

  p1 p1 p2 p3
  p1 p1 ee ee

  With ee beint empty, that means that there will be a blank space, in those cases, the developer must be aware
  of assigning values that will fill the Grid correctly, for that case, the first item will be 2x2, and the other 2
  must be 1x2 and 1x2, or 2x1 and 2x1.

  The idea is give the developer as much flexibility with the grid as posible, and with this srtup each item can
  grow as much as the developer specifies.

  Finally the viewport changes and the columns too, you need to be aware of those changes and test the grid in
  desktop, tablet and mobile to see if the changes are consistent across layouts.
*/

/* End of using 'teamPhotos' layout system */
