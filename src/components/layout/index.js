import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../header'
import { elastic as MenuMobile } from 'react-burger-menu'
import HamburguerStyles, { stylesBlack } from './hamburguerStyles'
import { Link } from 'gatsby'
import Viewport from '../HOC/withViewportHandler'
import LanguageButtons from '../languageButtons'
// import Header from '../header' El header se debe posicionar absoluto, lo comente para que el carousel del home se vea bien #MIGUEL
import './layout.css'
import { GlobalFonts } from '../styledComponents'
import { translate } from "react-i18next"

// Los componentes se conectan a graphql con "Static Query" (OJO solo debe ser usado para componentes que deban consultar)
// De resto los que deben conectarse son los contenedores y enviarlo a los componentes
class Layout extends Component {
  state = {
    isWhiteTheme: false,
    pathname: '',
    language: 'en',
  }
  componentDidMount() {
    this.setPathname();
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  changeLanguage = (lng) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  handleScroll = (event) =>  {
    if(window.scrollY > 100) {
      this.setState({ isWhiteTheme: true });
    } else {
      this.setState({ isWhiteTheme: false });
    }
  }
  setPathname = () => {
    const pathname = window.location.pathname;
    this.setState({
      pathname,
    });
  }
  setLanguage = (lang) => {
    this.setState({ language: lang }, () => this.changeLanguage(lang));
  }
  eventChangeLang = (event) => {
    this.setLanguage(event.target.value);
  }
  
  render() {
    const { children, viewport: { isDesktopView} } = this.props;
    const { isWhiteTheme, pathname, language } = this.state;
    const isWTheme = (pathname === '/') ? isWhiteTheme : true;
    const isSticky = isWhiteTheme;
    const hamburStyles = (isWTheme) ? { ...HamburguerStyles, ...stylesBlack } : HamburguerStyles; 
    const { t } = this.props;
    return (<StaticQuery
    query={graphql`
      query SiteTitleQuery {
        logo:file(relativePath: { eq: "logo-ss.png" }) {
          ...imageFragment
        }
        logoWhite:file(relativePath: { eq: "logo-ssw.png" }) {
          ...imageFragment
        }
      }
    `}
    render={data => {
      return (
        <>
          { /*<Header siteTitle={data.site.siteMetadata.title} />*/}
          <GlobalFonts />
          {
            (!isDesktopView) && <MenuMobile pageWrapId={ "page-wrap" } styles={hamburStyles} width={ 240 }>
              <Link to="/" > {t('nav.about')} </Link>
              <Link to="/" > {t('nav.cases')} </Link>
              <Link to="/careers"> {t('nav.careers')} </Link>
              <Link to="/" > {t('nav.quote')} </Link>
              <div style={{ marginTop:  5}}>
                <LanguageButtons isBlack changeLanguage={this.eventChangeLang} language={language} />
              </div>
            </MenuMobile>
          }
          <Header
            logo={data.logo}
            logoWhite={data.logoWhite}
            isWhiteTheme={isWTheme}
            isSticky={isSticky}
            language={language}
            changeLanguage={this.setLanguage}
          />
          <div id={'page-wrap'}>
            {children}
          </div>
        </>
      )
    }}
  />)
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  viewport: PropTypes.object,
}

export default translate("translations")(Viewport(Layout));
