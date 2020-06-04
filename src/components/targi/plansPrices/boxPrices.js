import React from 'react'
import PropTypes from 'prop-types'
import Icons from '../../icons'

import {
  ContentPrices,
  BoxLeft,
  BoxMonthly,
  BoxAnnual,
  InstallationBox,
  BoxRight,
  PriceTitle,
  PriceDescBig,
  PriceDescSmall,
  Price,
  CallToAction,
  BtnContact,
  LowestPrice
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
    <ContentPrices>
      <BoxLeft>
        <BoxMonthly>
          <PriceTitle>Plan Mensual</PriceTitle>
          <PriceDescBig className="descPrice">{currency} 
            <Price> {priceMonthly}</Price>/mes + IVA
          </PriceDescBig>
          <PriceDescSmall className="descPlans">Paga mes a mes</PriceDescSmall>
          <CallToAction href="/">Comprar</CallToAction>
        </BoxMonthly>

        <BoxAnnual>
          <PriceTitle>Plan Anual</PriceTitle>
          <PriceDescBig className="descPrice">{currency}
            <Price> {priceAnnual}</Price>/mes + IVA
          </PriceDescBig>
          <PriceDescSmall className="descPlans">
            Un solo pago anual de {`${currency} ${priceAnnualTotal}`} + IVA
          </PriceDescSmall>
          <CallToAction href="/">Comprar</CallToAction>
          <LowestPrice>
            <Icons
              backgroundColor="#000"
              height={26}
              width={26}
              iconName={'sale'}
            />
            <PriceDescSmall>Precio más bajo</PriceDescSmall>
          </LowestPrice>
        </BoxAnnual>

        <InstallationBox>
          <PriceTitle>Costo de Instalación</PriceTitle>
          <PriceDescBig>{currency} <Price> {installationCost}</Price>+ IVA</PriceDescBig>
          <PriceDescSmall>Un único pago para crear el app con tu marca.</PriceDescSmall>
        </InstallationBox>
      </BoxLeft>

      <BoxRight>
        <PriceTitle>Solución Personalizada</PriceTitle>
        <PriceDescBig className="descSolution">
          Te gusta la idea de un app pero tu negocio necesita una solución diferente, que se adapte mejor a sus necesidades?
        </PriceDescBig>
        <CallToAction href="#form" onClick={() =>{ onChangeInterest('Solución Personalizada') }}>Contáctanos</CallToAction>
      </BoxRight>
    </ContentPrices>
  )
}

// TODO: Add prop types here

export default BoxPrices;
