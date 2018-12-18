import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'
import { HeaderContainer, HeaderPageSizer, Head1 } from './styledComponents'
import Menu from '../menu';
const Header = ({ siteTitle, logo }) => { 
  console.log('logo', logo);
  return (
    <HeaderContainer>
      <HeaderPageSizer>
        <Head1>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Img sizes={logo.childImageSharp.sizes} style={{ width: "240px" }} />
          </Link>
        </Head1>
        <Menu />
      </HeaderPageSizer>
    </HeaderContainer>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
  logoUrl: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
  logo: '',
}

export default Header
