import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import BoxPrices from './boxPrices'

import {
  BoxCase,
  Subtitle,
  ContentTabs,
  TabListCustom,
  TabCustom,
  TabPanelCustom,
} from './styledComponents.js'

const theme = {
  breakpoints: {
    xs: 480,
    sm: 568,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1500,
  }
};

const PlansAndPrices = ({ t, data }) => {

  const {
    pricesCOP,
    pricesUSD,
  } = data;

  return (
    <ThemeProvider theme={theme}>
      <BoxCase>
        <Subtitle>{t(`caseStudies.cases.deliveryapp.plansAndPrices.subtitle`)}</Subtitle>
        <ContentTabs>
          <TabListCustom>
            <TabCustom>Colombia</TabCustom>
            <TabCustom>{t(`caseStudies.cases.deliveryapp.plansAndPrices.titleOtherCountry`)}</TabCustom>
          </TabListCustom>
      
          <TabPanelCustom>
            <BoxPrices 
              currency="COP"
              priceMonthly={pricesCOP.priceMonthly}
              priceAnnual={pricesCOP.priceAnnual}
              priceAnnualTotal={pricesCOP.priceAnnualTotal}
              costInstalation={pricesCOP.priceinstalation}
              t={t}
            />
          </TabPanelCustom>

          <TabPanelCustom>
            <BoxPrices 
              currency="USD"
              priceMonthly={pricesUSD.priceMonthly}
              priceAnnual={pricesUSD.priceAnnual}
              priceAnnualTotal={pricesUSD.priceAnnualTotal}
              costInstalation={pricesUSD.priceinstalation}
              t={t}
            />
          </TabPanelCustom>

        </ContentTabs>
      </BoxCase>
    </ThemeProvider>
  )
}
;

PlansAndPrices.propTypes = {
  textExperience: PropTypes.string,
  image: PropTypes.object,
};

export default PlansAndPrices
