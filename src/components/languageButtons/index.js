import React from 'react'
import { LanguageSection, Button } from './styledComponents'

const LanguageButton = ({ isBlack, changeLanguage, language }) => {
  return (
    <LanguageSection isBlack={isBlack}>
        <Button active={language==='EN'} value={'EN'} onClick={changeLanguage}>EN</Button>
        |
        <Button active={language==='ES'} value={'ES'} onClick={changeLanguage}>ES</Button>
    </LanguageSection>
)}

export default LanguageButton
