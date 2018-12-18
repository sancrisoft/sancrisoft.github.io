import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Img from 'gatsby-image'
import { HeaderContainer, HeaderPageSizer, Head1 } from './styledComponents'
import Viewport from '../HOC/withViewportHandler'
import Menu from '../menu';

class Header extends Component {
  state = {
    isWhiteTheme: false,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) =>  {
    // do something like call `this.setState`
    // access window.scrollY etc
    if(window.scrollY > 120) {
      this.setState({ isWhiteTheme: true });
    } else {
      this.setState({ isWhiteTheme: false });
    }
  }
  render() {
    const { logo, logoWhite, viewport: { isDesktopView } } = this.props;
    const { isWhiteTheme } = this.state;
    return (
      <HeaderContainer isWhite={isWhiteTheme}>
        <HeaderPageSizer>
          <Head1>
            <Link to="/" >
              <Img sizes={(isWhiteTheme) ? logo.childImageSharp.sizes : logoWhite.childImageSharp.sizes} style={{ width: "220px" }} />
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
  siteTitle: PropTypes.string,
  logoUrl: PropTypes.string,
  viewport: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: '',
  logo: '',
}

export default Viewport(Header)
