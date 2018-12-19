import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Img from 'gatsby-image'
import { HeaderContainer, HeaderPageSizer, Head1 } from './styledComponents'
import Viewport from '../HOC/withViewportHandler'
import Menu from '../menu';

class Header extends PureComponent {
  render() {
    const { logo, logoWhite, viewport: { isDesktopView }, isWhiteTheme } = this.props;
    return (
      <HeaderContainer isWhite={isWhiteTheme}>
        <HeaderPageSizer>
          <Head1>
            <Link to="/" >
              <Img sizes={(isWhiteTheme) ? logo.childImageSharp.sizes : logoWhite.childImageSharp.sizes} style={{ width: "200px" }} />
            </Link>
          </Head1>
          {
            (isDesktopView) && <Menu isBlack={isWhiteTheme}/>
          }
        </HeaderPageSizer>
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  logoUrl: PropTypes.string,
  viewport: PropTypes.object,
  isWhiteTheme: PropTypes.bool,
}

Header.defaultProps = {
  logo: '',
}

export default Viewport(Header)
