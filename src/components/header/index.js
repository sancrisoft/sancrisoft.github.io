import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { HeaderContainer, HeaderPageSizer, Head1, ImgLogo, RighSection } from './styledComponents'
import Viewport from '../HOC/withViewportHandler'
import LanguageButtons from '../languageButtons'
import Menu from '../menu';
import LogoSs from '../../images/logo-ss.png';
import LogoSsW from '../../images/logo-ssw.png';


class Header extends PureComponent {
  changeLanguage = (event) => {
    const { changeLanguage } = this.props;
    if(changeLanguage) changeLanguage(event.target.value);
  }
  render() {
    const { logo, logoWhite, viewport: { isDesktopView }, isWhiteTheme, language, isSticky } = this.props;
    return (
      <HeaderContainer isWhite={isWhiteTheme} isSticky={isSticky}>
        <HeaderPageSizer>
          <Head1>
            <Link to="/" >
              <ImgLogo src={(isWhiteTheme) ? LogoSs : LogoSsW } alt="Logo Sancrisoft" style={{ width: "200px" }} />
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
  isSticky: PropTypes.bool,
}

Header.defaultProps = {
  logo: '',
}

export default Viewport(Header)
