import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {ThemeProvider} from 'styled-components'
import { withNamespaces } from "react-i18next"
import Title from '../title'

import {
  ContentCases,
  CaseLeft,
  CaseLeftTop,
  CaseLeftBottom,
  CaseRight,
  CaseRightImage,
  Logos,
  A,
  ExternalLink,
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

const CasesImage = (props) => {
  const {
    title,
    description,
    image,
    phone,
    playStore,
    appStore,
    linkPlayStore,
    linkAppStore, 
    widthImage,
    marginBottom,
    weblink,
    weblinkTitle
  } = props;
  return(
    <ThemeProvider theme={theme}>
      <ContentCases>
        <CaseLeft>
          <CaseLeftTop widthImage={widthImage} marginBottom={marginBottom}>
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
            {
              (playStore) && <A
              href={linkPlayStore}
              target="_blank"
              className="playStore"
            >
              <Img sizes={playStore} />
            </A>
            }
            {
              (playStore) && <A
                href={linkAppStore}
                target="_blank"
                className="appStore"
              >
                <Img sizes={appStore} />
              </A>
            }
            {
              (weblink) && <ExternalLink
                href={weblink}
                target="_blank"
              >
                {weblinkTitle}
              </ExternalLink>
            }
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
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  widthImage: PropTypes.string,
  phone: PropTypes.string,
  playStore: PropTypes.object,
  appStore: PropTypes.object,
  linkAppStore: PropTypes.string,
  linkPlayStore: PropTypes.string,
  weblink: PropTypes.string,
  marginBottom: PropTypes.string
};


export default withNamespaces('translations')(CasesImage)
