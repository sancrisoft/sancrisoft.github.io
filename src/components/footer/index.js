import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import LanguageButtons from '../languageButtons'
import Menu from '../menu';
import Icons from '../icons';

import {
  FooterContainer,
  FooterTop,
  FooterBottom,
  Networks,
  ContentIcon,
  A,
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
      logo,
      language
    } = this.props;

    return (
      <FooterContainer>
        <FooterTop>
          <div className="menu">
            <Menu isBlack />
            <LanguageButtons isBlack changeLanguage={this.changeLanguage} language={language} />
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
