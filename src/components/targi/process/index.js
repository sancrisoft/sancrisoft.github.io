import React from 'react'
import PropTypes from 'prop-types'

import {
  BoxProcess,
  ProcessList,
  ProcessItem,
  ProcessCircle,
  ProcessText
} from './styledComponents.js'

const Process = () => {
  return (
    <BoxProcess>
      <ProcessList>
        <ProcessItem>
          <ProcessCircle>1</ProcessCircle>
          <ProcessText>Nos contactas y te suscribes</ProcessText>
        </ProcessItem>
        <ProcessItem>
          <ProcessCircle>2</ProcessCircle>
          <ProcessText>Nos envías la información de tu negocio</ProcessText>
        </ProcessItem>
        <ProcessItem>
          <ProcessCircle>3</ProcessCircle>
          <ProcessText>Publicamos tu app en los stores</ProcessText>
        </ProcessItem>
        <ProcessItem>
          <ProcessCircle>4</ProcessCircle>
          <ProcessText>¡Comienzas a vender!</ProcessText>
        </ProcessItem>
      </ProcessList>
    </BoxProcess>
  )
}
;

Process.propTypes = {
  textExperience: PropTypes.string,
  image: PropTypes.object,
};

export default Process
