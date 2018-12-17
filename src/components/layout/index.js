import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../header'
// import Header from '../header' El header se debe posicionar absoluto, lo comente para que el carousel del home se vea bien #MIGUEL
import './layout.css'
import { GlobalFonts } from '../styledComponents'

// Los componentes se conectan a graphql con "Static Query" (OJO solo debe ser usado para componentes que deban consultar)
// De resto los que deben conectarse son los contenedores y enviarlo a los componentes

const Layout = ({ children }) => (
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
      }
    `}
    render={data => (
      <>
        { /*<Header siteTitle={data.site.siteMetadata.title} />*/}
        <GlobalFonts />
        <Header logo={data.logo}/>
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
