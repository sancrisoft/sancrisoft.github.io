import React from 'react'
import BoxPrices from './boxPrices'

import {
  BoxCase,
  ContentTabs,
  TabListCustom,
  TabCustom,
  TabPanelCustom,
  PageSizer,
} from './styledComponents.js'

const PlansAndPrices = ({onChangePlace, onChangeInterest}) => {
  return (
      <BoxCase>
        <h5>¿Dónde está tu negocio?</h5>
        <ContentTabs  onSelect={index => onChangePlace(!index ? "Colombia" : "Otro País") }>
          <TabListCustom>
            <TabCustom>Colombia</TabCustom>
            <TabCustom>Otro País</TabCustom>
          </TabListCustom>
      
          <TabPanelCustom>
            <PageSizer>
              <BoxPrices 
                currency="COP"
                priceMonthly="349.900"
                priceAnnual="299.900"
                priceAnnualTotal="3.598.800"
                installationCost="1.800.000"
                onChangeInterest={onChangeInterest}
              />
            </PageSizer>
          </TabPanelCustom>

          <TabPanelCustom>
            <PageSizer>
              <BoxPrices 
                currency="USD"
                priceMonthly="80"
                priceAnnual="66.66"
                priceAnnualTotal="800"
                installationCost="500"
                onChangeInterest={onChangeInterest}
              />
            </PageSizer>
          </TabPanelCustom>
        </ContentTabs>
      </BoxCase>
  )
}

export default PlansAndPrices
