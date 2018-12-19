import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Img from 'gatsby-image'
import { HeaderContainer, HeaderPageSizer, Head1, RighSection } from './styledComponents'
import Viewport from '../HOC/withViewportHandler'
import LanguageButtons from '../languageButtons'
import Menu from '../menu';


class Header extends PureComponent {
  changeLanguage = (event) => {
    const { changeLanguage } = this.props;
    if(changeLanguage) changeLanguage(event.target.value);
  }
  render() {
    const { logo, logoWhite, viewport: { isDesktopView }, isWhiteTheme, language } = this.props;
    return (
      <HeaderContainer isWhite={isWhiteTheme}>
        <HeaderPageSizer>
          <Head1>
            <Link to="/" >
              <Img sizes={(isWhiteTheme) ? logo.childImageSharp.sizes : logoWhite.childImageSharp.sizes} style={{ width: "200px" }} />
            </Link>
          </Head1>
          <RighSection>
            {
              (isDesktopView) && <Menu isBlack={isWhiteTheme}/>
            }
            {
              (isDesktopView) && <LanguageButtons isBlack={isWhiteTheme} changeLanguage={this.changeLanguage} language={language} />
            }
            
          </RighSection>
      
          
        </HeaderPageSizer>
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  logoUrl: PropTypes.string,
  viewport: PropTypes.object,
  isWhiteTheme: PropTypes.bool,
  language: PropTypes.string,
  changeLanguage: PropTypes.func,
}

Header.defaultProps = {
  logo: '',
}

export default Viewport(Header)
