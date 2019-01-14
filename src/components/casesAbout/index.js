import React from 'react'
import PropTypes from 'prop-types'

import Title from '../../components/title'


import {
  ContentAbout,
  AboutTitle,
  AboutDescription,
  A
} from './styledComponents'

const CasesAbout = ({id ,urlNetwork, name, description}) => {
  return(
    <ContentAbout>
      <AboutTitle>
        <Title
          type={2}
          text={`${name} ${id}`}
        />
      </AboutTitle>
      <AboutDescription>
        <p>
          {description}
          <A href={urlNetwork} target="_blank" >{urlNetwork}</A>
        </p>
      </AboutDescription>
    </ContentAbout>
  );
}

CasesAbout.propTypes = {
  urlNetwork: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default CasesAbout
