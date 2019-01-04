import React from 'react'
import { LanguageSection, Button } from './styledComponents'

const LanguageButton = ({ isBlack, changeLanguage, language }) => {
    console.log('language', language);
    return (
    <LanguageSection isBlack={isBlack}>
        <Button active={language==='en'} value={'en'} onClick={changeLanguage}>EN</Button>
        |
        <Button active={language==='es'} value={'es'} onClick={changeLanguage}>ES</Button>
    </LanguageSection>
)}

export default LanguageButton
