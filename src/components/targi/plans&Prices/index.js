import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import BoxPrices from './boxPrices'
import Icons from '../../icons'


import {
  BoxCase,
  Subtitle,
  ContentTabs,
  TabListCustom,
  TabCustom,
  TabPanelCustom,
  NotePlans,
  NoteTitle,
  NoteList,
  NoteItem,
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

        <NotePlans>
          <NoteTitle>Además ten en cuenta que...</NoteTitle>
          <NoteList>
            <NoteItem>
              <Icons
                backgroundColor="#000"
                height={14}
                width={14}
                iconName={'check'}
              />
              {t(`caseStudies.cases.deliveryapp.plansAndPrices.notes.1`)}</NoteItem>
            <NoteItem>
              <Icons
                backgroundColor="#000"
                height={14}
                width={14}
                iconName={'check'}
              />
              <p><strong>{t(`caseStudies.cases.deliveryapp.plansAndPrices.notes.noClausula`)}</strong> {t(`caseStudies.cases.deliveryapp.plansAndPrices.notes.2`)}</p>
            </NoteItem>
          </NoteList>
        </NotePlans>
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
