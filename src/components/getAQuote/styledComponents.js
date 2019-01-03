import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import offices from '../../images/home/offices.jpg'

export const ContentGetaQuote = styled.div`
  padding: 3em 1em;
  position: relative;
  &::after {
    content: '';
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
  	background-position: center center;
  	background-size: cover;
  	background-attachment: fixed;
    background-image: url(${offices});
  	height: 100vh;
    z-index: -2;
  }
  &::before {
    content: '';
    display: flex;
    background: rgba(0,0,0, .5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
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
  padding: 1.5em .5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px #333;
  }
`;

export const QuoteBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
`;
