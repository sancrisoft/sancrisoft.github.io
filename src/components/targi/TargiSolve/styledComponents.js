import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const BoxCase = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  width: 90%;
  padding: 1em 1em;
  min-height: 420px;
  height: auto;
  p.textOut {
    padding-top: 1em;
    font-size: 1em;
  }
  ${breakpoint('sm')`
    width: 48%;
  `}
  ${breakpoint('md')`
    width: 32%;
  `}
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  border: 4px solid #333;
  padding: 1em 1em;
  min-height: 270px;
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
  h3 {
    font-size: 19px;
    line-height: 1.2;
    margin: 0;
    ${breakpoint('xxl')`
      font-size: 24px;
    `}
  }
`;

