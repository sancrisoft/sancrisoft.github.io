import React from 'react'

import {
  CallToAction,
  CallToActionWhite,
  CallToActionSecondary,
  Plans,
  CustomSolutions,
  PlanPanel,
  PlanPanelYear,
  Price,
  SetupCost,
} from './styledComponents.js'

const BoxPrices = ({ 
    priceMonthly, 
    priceAnnual, 
    priceAnnualTotal, 
    currency,
    installationCost, 
    onChangeInterest 
  }) => {

  return (
    <React.Fragment>
      <Plans>
        <PlanPanel>
          <h4>Plan Mensual</h4>
          <Price><span className="currency">{currency}</span> <span className="amount">{priceMonthly}</span><br />/mes + IVA</Price>
          <p>Pagas mes a mes</p>
          <CallToAction href="#form">Comprar</CallToAction>
        </PlanPanel>
        <PlanPanelYear>
          <h4>Plan Anual</h4>
          <Price><span className="currency">{currency}</span> <span className="amount">{priceAnnual}</span><br />/mes + IVA</Price>
          <p>Un solo pago anual de {currency} {priceAnnualTotal} + IVA</p>
          <CallToActionWhite href="#form">Comprar</CallToActionWhite>
        </PlanPanelYear>
        <CustomSolutions>
          <h4>Solución Personalizada</h4>
          <p>¿Te agrada la idea de un app pero tu negocio necesita una solución diferente para sus necesidades?</p>
          <CallToActionSecondary href="#form">Contáctanos</CallToActionSecondary>
        </CustomSolutions>
      </Plans>
      <SetupCost>
        <p>Se requiere costo de instalación de {currency} {installationCost} + IVA.<br />Un único pago para crear el app con tu marca.</p>
      </SetupCost>
    </React.Fragment>
  )
}

export default BoxPrices;
