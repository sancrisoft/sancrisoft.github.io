import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import LanguageButtons from '../languageButtons'
import Menu from '../menu';

import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  Networks,
} from './styledComponents'

class Footer extends PureComponent {
  changeLanguage = (event) => {
    const { changeLanguage } = this.props;
    if(changeLanguage) changeLanguage(event.target.value);
  }
  render() {
    const {
      networks: {
        facebook,
        twitter,
        instagram
      },
      logo
    } = this.props;

    return (
      <FooterContainer>
        <FooterTop>
          <Menu isBlack />
          <LanguageButtons isBlack changeLanguage={this.changeLanguage} />
          <Networks>

          </Networks>
        </FooterTop>

        <FooterBottom>
          <Img sizes={logo.childImageSharp.sizes} style={{ width: "55px" }} />
        </FooterBottom>
      </FooterContainer>
    );
  }
}

Footer.propTypes = {
  networks: PropTypes.object,
  changeLanguage: PropTypes.func,
}

Footer.defaultProps = {

}

export default Footer
