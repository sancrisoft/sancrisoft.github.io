import React from 'react'

import {
  ContentGetaQuote,
  Container,
  QuoteTop,
  QuoteBottom
} from './styledComponents.js'

const getAQuote = ({ children, desc }) => {
  return (
    <ContentGetaQuote>
      <Container>
        <QuoteTop>
          <p className="description">
            {desc}
          </p>
        </QuoteTop>
        {
          (children) &&
            <QuoteBottom>
              {children}
            </QuoteBottom>
        }
      </Container>
    </ContentGetaQuote>
  )
}

export default getAQuote
