import { Link } from 'gatsby'
import React from 'react'
import { MenuContainer } from './styledComponents'
import { withNamespaces } from "react-i18next"

const Menu = ({ isBlack, t }) => {
  return (
    <MenuContainer isBlack={isBlack}>
        <Link
          to="/about"
          activeStyle={{
            color: "#F28724",
          }}
        > {t('home.nav.about')} </Link>
        {/*<Link to="/case-studies" > {t('home.nav.cases')} </Link>*/}
        <Link
          to="/careers"
          activeStyle={{
            color: "#F28724",
          }}
        > {t('home.nav.careers')} </Link>
        <Link
          to="/contact"
          className={'special'}
          activeStyle={{
            color: "#fff",
          }}
        > {t('home.nav.quote')} </Link>
    </MenuContainer>
)}

export default withNamespaces('translations')(Menu)
