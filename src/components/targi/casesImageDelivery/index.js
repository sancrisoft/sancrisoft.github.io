import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {ThemeProvider} from 'styled-components'
import { withNamespaces } from "react-i18next"
import Title from '../../title'
import Icons from '../../icons';

import {
  ContentCases,
  CaseLeft,
  CaseLeftTop,
  CaseLeftBottom,
  CaseRight,
  CaseRightImage,
  ContentPurchase,
  BtnPurchase,
  ArrowAnimated,
} from './styledComponents'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 568,
    md: 768,
    lg: 991,
    xl: 1200,
    xxl: 1500,
  }
};

const CasesImage = (props) => {
  const {
    title,
    subtitle,
    description,
    image,
    phone,
    linkPurchase,
    widthImage,
    marginBottom,
  } = props;

  console.log('props', props);
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
             <Title
              type={2}
              text={subtitle}
            />
            <p>{description}</p>
          </CaseLeftBottom>

          <ContentPurchase>
            {
              linkPurchase && <BtnPurchase
                href={linkPurchase}
                target="_blank"
                className="playStore"
              >¡Comprar Ahora!</BtnPurchase>
            }
          </ContentPurchase>
        </CaseLeft>
        <CaseRight>
          <CaseRightImage>
            <img src={phone} alt="phone"/>
          </CaseRightImage>
        </CaseRight>

        <ArrowAnimated>
          <Icons
            backgroundColor="#000"
            height={40}
            width={40}
            iconName={'bottom-arrow'}
          />
        </ArrowAnimated>
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
