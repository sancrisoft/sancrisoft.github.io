import React from 'react'

import Title from '../../components/title'

import {
  ContentTecnology,
  TecnologyTitle
} from './styledComponents'

const CasesTecnology = () => {
  return(
    <ContentTecnology>
      tecnology
      <TecnologyTitle>
        <Title
          type={2}
          text="Tecnologies"
        />
      </TecnologyTitle>
    </ContentTecnology>
  );
}

CasesTecnology.propTypes = {

};

export default CasesTecnology
