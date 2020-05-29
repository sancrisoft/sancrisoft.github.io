import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Icons from '../../icons'

import {
  ContentPrices,
  BoxLeft,
  BoxMonthly,
  BoxAnnual,
  BoxInstalation,
  BoxRight,
  PriceTitle,
  PriceDescBig,
  PriceDescSmall,
  Price,
  BtnPurchase,
  BtnContact,
  LowestPrice
} from './styledComponents.js'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 568,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1500,
  }
};

const BoxPrices = ({ 
    t, 
    priceMonthly, 
    priceAnnual, 
    priceAnnualTotal, 
    currency, 
    costInstalation, 
    onChangeInterest 
  }) => {

  return (
    <ThemeProvider theme={theme}>
      <ContentPrices>
        <BoxLeft>
          <BoxMonthly>
            <PriceTitle>
              {t(`caseStudies.cases.deliveryapp.plansAndPrices.titleMonthly`)}
            </PriceTitle>
            <PriceDescBig className="descPrice">{currency} 
              <Price> {priceMonthly}</Price>/{t(`caseStudies.cases.deliveryapp.plansAndPrices.month`)} + IVA
            </PriceDescBig>
            <PriceDescSmall className="descPlans">
              {t(`caseStudies.cases.deliveryapp.plansAndPrices.monthlydesc`)}
            </PriceDescSmall>
            <BtnPurchase href="/">{t(`caseStudies.cases.deliveryapp.plansAndPrices.btnCompra`)}</BtnPurchase>
          </BoxMonthly>

          <BoxAnnual>
            <PriceTitle>
              {t(`caseStudies.cases.deliveryapp.plansAndPrices.titleAnnual`)}
            </PriceTitle>
            <PriceDescBig className="descPrice">{currency}
              <Price> {priceAnnual}</Price>/{t(`caseStudies.cases.deliveryapp.plansAndPrices.month`)} + IVA
            </PriceDescBig>
            <PriceDescSmall className="descPlans">
              {t(`caseStudies.cases.deliveryapp.plansAndPrices.annualDesc`)} {`${currency} ${priceAnnualTotal}`} + IVA
            </PriceDescSmall>
            <BtnPurchase href="/">{t(`caseStudies.cases.deliveryapp.plansAndPrices.btnCompra`)}</BtnPurchase>
            <LowestPrice>
              <Icons
                backgroundColor="#000"
                height={26}
                width={26}
                iconName={'sale'}
              />
              <PriceDescSmall>
                {t(`caseStudies.cases.deliveryapp.plansAndPrices.annualLowCost`)}
              </PriceDescSmall>
            </LowestPrice>
          </BoxAnnual>

          <BoxInstalation>
            <PriceTitle>{t(`caseStudies.cases.deliveryapp.plansAndPrices.titleCost`)}</PriceTitle>
            <PriceDescBig>{currency} <Price> {costInstalation}</Price>+ IVA</PriceDescBig>
            <PriceDescSmall>{t(`caseStudies.cases.deliveryapp.plansAndPrices.costDesc`)}</PriceDescSmall>
          </BoxInstalation>
        </BoxLeft>

        <BoxRight>
          <PriceTitle>
            {t(`caseStudies.cases.deliveryapp.plansAndPrices.titleSolution`)}
          </PriceTitle>
          <PriceDescBig className="descSolution">
            {t(`caseStudies.cases.deliveryapp.plansAndPrices.solutionDesc`)}
          </PriceDescBig>
          <BtnContact href="#form" onClick={() =>{ onChangeInterest('Solución Personalizada') }}>
            {t(`caseStudies.cases.deliveryapp.plansAndPrices.btnSolution`)}
          </BtnContact>
        </BoxRight>
      </ContentPrices>
    </ThemeProvider>
  )
}
;

BoxPrices.propTypes = {
  textExperience: PropTypes.string,
  image: PropTypes.object,
};

export default BoxPrices
