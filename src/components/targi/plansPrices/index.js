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

const PlansAndPrices = () => {
  return (
      <BoxCase>
        <h5>¿Dónde está tu negocio?</h5>
        <ContentTabs  onSelect={index => {}}>
          <TabListCustom>
            <TabCustom>Colombia</TabCustom>
            <TabCustom>Otro País</TabCustom>
          </TabListCustom>
      
          <TabPanelCustom>
            <PageSizer>
              <BoxPrices 
                currency="COP"
                priceMonthly="299.900"
                priceAnnual="249.917"
                priceAnnualTotal="2.999.000"
                installationCost="1.800.000 + IVA"
                onChangeInterest={() => { console.log('interest'); }}
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
                onChangeInterest={() => { console.log('interest'); }}
              />
            </PageSizer>
          </TabPanelCustom>
        </ContentTabs>
      </BoxCase>
  )
}

export default PlansAndPrices
