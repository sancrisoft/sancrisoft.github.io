import { Link } from 'gatsby'
import React from 'react'
import { MenuContainer } from './styledComponents'
import { translate } from "react-i18next"

const Menu = ({ isBlack, t }) => {
  return (
    <MenuContainer isBlack={isBlack}>
        <Link to="/" > {t('nav.about')} </Link>
        <Link to="/" > {t('nav.cases')} </Link>
        <Link to="/careers"> {t('nav.careers')} </Link>
        <Link to="/" className={'special'}> {t('nav.quote')} </Link>
    </MenuContainer>
)}

export default translate("translations")(Menu)
