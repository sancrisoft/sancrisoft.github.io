import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../header'
import { elastic as MenuMobile } from 'react-burger-menu'
import HamburguerStyles from './hamburguerStyles'
import { Link } from 'gatsby'
import Viewport from '../HOC/withViewportHandler'
// import Header from '../header' El header se debe posicionar absoluto, lo comente para que el carousel del home se vea bien #MIGUEL
import './layout.css'
import { GlobalFonts } from '../styledComponents'

// Los componentes se conectan a graphql con "Static Query" (OJO solo debe ser usado para componentes que deban consultar)
// De resto los que deben conectarse son los contenedores y enviarlo a los componentes

const Layout = ({ children, viewport: { isDesktopView} }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        logo:file(relativePath: { eq: "logo-ss.png" }) {
          ...imageFragment
        }
        logoWhite:file(relativePath: { eq: "logo-ssw.png" }) {
          ...imageFragment
        }
      }
    `}
    render={data => (
      <>
        { /*<Header siteTitle={data.site.siteMetadata.title} />*/}
        <GlobalFonts />
        {
          (!isDesktopView) && <MenuMobile pageWrapId={ "page-wrap" } styles={ HamburguerStyles } width={ 240 }>
            <Link to="/" > About Us </Link>
            <Link to="/" > Case Studies </Link>
            <Link to="/" > Careers </Link>
            <Link to="/" > Get a Quote </Link>
          </MenuMobile>
        }
        <div id={'page-wrap'}>
          <Header logo={data.logoWhite}/>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  viewport: PropTypes.object,
}

export default Viewport(Layout);
