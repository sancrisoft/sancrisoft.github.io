import React from 'react'
import PropTypes from 'prop-types';

import Title from '../title'

import {
  ContentOurValue,
  Box,
  Boxtitle,
  BoxDesc
} from './styledComponents.js'

const OurValue = ({ description, title }) => {
  return (
    <ContentOurValue>
      <Box>
        <Boxtitle>
          <Title
            type={3}
            text={title}
          />
        </Boxtitle>
        <BoxDesc>
          <p>{description}</p>
        </BoxDesc>
      </Box>
    </ContentOurValue>
  )
}

OurValue.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default OurValue
