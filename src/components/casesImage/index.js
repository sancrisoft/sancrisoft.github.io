import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Title from '../title'

import {
  ContentCases,
  CaseLeft,
  CaseLeftTop,
  CaseLeftBottom,
  CaseRight,
  Logos,
  A
} from './styledComponents'

const CasesImage = ({
  title,
  description,
  image,
  playStore,
  appStore,
  linkPlayStore,
  linkAppStore }) => {

  return(
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
        Right
      </CaseRight>
    </ContentCases>
  );
}

CasesImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  playStore: PropTypes.object,
  appStore: PropTypes.object,
  linkAppStore: PropTypes.string,
  linkPlayStore: PropTypes.string,
};


export default CasesImage
