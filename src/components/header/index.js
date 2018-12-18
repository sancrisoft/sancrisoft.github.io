import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import { HeaderContainer, HeaderPageSizer, Head1 } from './styledComponents'
import Viewport from '../HOC/withViewportHandler'
import Menu from '../menu';
const Header = ({ siteTitle, logo, viewport: { isDesktopView } }) => { 
  return (
    <HeaderContainer>
      <HeaderPageSizer>
        <Head1>
          <Link to="/" >
            <Img sizes={logo.childImageSharp.sizes} style={{ width: "240px" }} />
          </Link>
        </Head1>
        {
          (isDesktopView) && <Menu />
        }
      </HeaderPageSizer>
    </HeaderContainer>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
  logoUrl: PropTypes.string,
  viewport: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: '',
  logo: '',
}

export default Viewport(Header)
