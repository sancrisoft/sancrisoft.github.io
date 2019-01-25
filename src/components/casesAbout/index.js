import React from 'react'
import PropTypes from 'prop-types'

import Title from '../title'
import Icons from '../icons'


import {
  ContentAbout,
  AboutTitle,
  AboutDescription,
  AboutMore,
  Services,
  Features,
  A,
  UL
} from './styledComponents'

const CasesAbout = ({id ,urlNetwork, name, description, services, features, titleServices, titleFeatures }) => {
  return(
    <ContentAbout>
      <AboutDescription>
        <AboutTitle>
          <Title
            type={2}
            text={`${name} ${id}`}
          />
        </AboutTitle>
        <p>
          {description}
          <A href={urlNetwork} target="_blank" >{urlNetwork}</A>
        </p>
      </AboutDescription>
      <AboutMore>
        <Services>
          <Title
            type={4}
            text={titleServices}
            align="left"
          />
          <UL>
            {
              services.map((item, i) => {
                return(
                  <li key={i}>
                    <Icons
                      iconName="check"
                      backgroundColor="#F28724"
                      height={13}
                      width={13}
                    />
                      {item}
                  </li>
                )
              })
            }
          </UL>
        </Services>
        <Features>
          <Title
            type={4}
            text={titleFeatures}
            align="left"
          />
          <UL>
            {
              features.map((item, i) => {
                return(
                  <li key={i}>
                    <Icons
                      iconName="check"
                      backgroundColor="#F28724"
                      height={13}
                      width={13}
                    />
                      {item}
                  </li>
                )
              })
            }
          </UL>
        </Features>
      </AboutMore>
    </ContentAbout>
  );
}

CasesAbout.propTypes = {
  urlNetwork: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  titleServices: PropTypes.string,
  services: PropTypes.array,
  titleFeatures: PropTypes.string,
  features: PropTypes.array,
};

export default CasesAbout
