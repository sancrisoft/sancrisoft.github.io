import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const BoxCase = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  width: 90%;
  padding: 1em;
  min-height: 360px;
  height: auto;
  margin: auto;
  p.textOut {
    padding-top: 1em;
    font-size: .9em;
    width: 100%;
    text-align: center;
    margin-bottom: 0;
  }
  ${breakpoint('xs')`
    width: 48%;
    padding: 1em 0em;
    min-height: 400px;
  `}
  ${breakpoint('sm')`
    padding: 1em;
  `}
  ${breakpoint('md')`
    width: 32%;
    min-height: 420px;
    p.textOut {
      font-size: 1em;
      text-align: left;
    }
  `}
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  // border: 4px solid #333;
  padding: 1em 1em;
  min-height: 270px;
  box-shadow: 1px 1px 8px #333;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  .gatsby-image-wrapper {
    width: 100px;
  }
`;

export const Boxtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h3, h6 {
    width: 100%;
    font-size: 20px;
  }
`;

export const BoxDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 12px;
  text-align: center;
  h3 {
    font-size: 17px;
    line-height: 1.2;
    margin: 0;
    ${breakpoint('md')`
      font-size: 19px;
    `}
    ${breakpoint('xxl')`
      font-size: 24px;
    `}
  }
`;

