import React from 'react'
import PropTypes from 'prop-types'

import Title from '../../components/title'

import {
  ContentTecnology,
  TecnologyTitle
} from './styledComponents'

const CasesTecnology = ({title}) => {
  return(
    <ContentTecnology>
      <TecnologyTitle>
        <Title
          type={2}
          text={title}
        />
      </TecnologyTitle>
    </ContentTecnology>
  );
}

CasesTecnology.propTypes = {
  title: PropTypes.string,
};

export default CasesTecnology
