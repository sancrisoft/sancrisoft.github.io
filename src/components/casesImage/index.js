import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {ThemeProvider} from 'styled-components'

import Title from '../title'

import {
  ContentCases,
  CaseLeft,
  CaseLeftTop,
  CaseLeftBottom,
  CaseRight,
  CaseRightImage,
  Logos,
  A
} from './styledComponents'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 568,
    md: 768,
    lg: 991,
    xl: 1200
  }
};

const CasesImage = ({
  title,
  description,
  image,
  phone,
  playStore,
  appStore,
  linkPlayStore,
  linkAppStore }) => {

  return(
    <ThemeProvider theme={theme}>
      <ContentCases>
        <CaseLeft>
          <CaseLeftTop>
            <Img sizes={image} />
            <Title
              type={3}
              text={title}
            />
          </CaseLeftTop>
          <CaseLeftBottom>
            <p>{description}</p>
          </CaseLeftBottom>
          <Logos>
            <A
              href={linkPlayStore}
              target="_blank"
              className="playStore"
            >
              <Img sizes={playStore} />
            </A>
            <A
              href={linkAppStore}
              target="_blank"
              className="appStore"
            >
              <Img sizes={appStore} />
            </A>
          </Logos>
        </CaseLeft>
        <CaseRight>
          <CaseRightImage>
            <img src={phone} alt="phone"/>
          </CaseRightImage>
        </CaseRight>
      </ContentCases>
    </ThemeProvider>
  );
}

CasesImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  phone: PropTypes.string,
  playStore: PropTypes.object,
  appStore: PropTypes.object,
  linkAppStore: PropTypes.string,
  linkPlayStore: PropTypes.string,
};


export default CasesImage
