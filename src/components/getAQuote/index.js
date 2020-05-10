import React from 'react'

import {
  ContentGetaQuote,
  Container,
  QuoteTop,
  QuoteBottom
} from './styledComponents.js'

const GetAQuote = ({ children, desc }) => {
  return (
    <ContentGetaQuote id="cta-container">
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

export default GetAQuote
