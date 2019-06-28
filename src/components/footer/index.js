import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import LanguageButtons from '../languageButtons'
import Menu from '../menu';
import Icons from '../icons';

import {
  FooterContainer,
  FooterPageSizer,
  FooterTop,
  FooterBottom,
  Networks,
  ContentIcon,
  A,
  Address
} from './styledComponents'

class Footer extends Component {
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
      logo,
      language,
      showLogo
    } = this.props;

    return (
      <FooterContainer>
        <FooterPageSizer>
          <FooterTop>
            <div className="left-container">
              <div className="menu">
                <Menu isBlack />
                <LanguageButtons isBlack changeLanguage={this.changeLanguage} language={language} />
              </div>
              <Address>
                <span>Calle 49 Sur #45 A 300.</span>
                <span>Envigado, Antioquia, Colombia.</span>
                <a href="tel:+5744797416">+57 (4) 4797416</a></Address>
            </div>
            <Networks>
              <ContentIcon>
                <A href={facebook} target="_blank" className="facebook">
                  <Icons
                    iconName="facebook"
                    backgroundColor="#333"
                    height={45}
                    width={45}
                  />
                </A>
              </ContentIcon>
              <ContentIcon>
                <A href={instagram} target="_blank" className="instagram">
                  <Icons
                    iconName="instagram"
                    backgroundColor="#333"
                    height={45}
                    width={45}
                  />
                </A>
              </ContentIcon>
              <ContentIcon>
                <A href={twitter} target="_blank" className="twitter">
                  <Icons
                    iconName="twitter"
                    backgroundColor="#333"
                    height={45}
                    width={45}
                  />
                </A>
              </ContentIcon>
            </Networks>
          </FooterTop>
          {
            showLogo && <FooterBottom>
              <Img sizes={logo.childImageSharp.sizes} style={{ width: "55px" }} />
            </FooterBottom>
          }
        </FooterPageSizer>
      </FooterContainer>
    );
  }
}

Footer.propTypes = {
  networks: PropTypes.object,
  changeLanguage: PropTypes.func,
  showLogo: PropTypes.bool,
}

Footer.defaultProps = {
  showLogo: false
}

export default Footer
