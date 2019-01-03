import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentGetaQuote = styled.div`
  padding: 2em 1em;
  background: #ddd;
`;
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  ${breakpoint('tablet')`
    width: 650px;
  `}
  ${breakpoint('desktop')`
    width: 991px;
  `}
`;
export const QuoteTop = styled.div`
  padding: 1em .5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
  }
`;

export const QuoteBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;
