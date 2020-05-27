import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const BoxCase = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin-bottom: 4%;
  border: 4px solid #333;
  padding: 1em 1em;
  ${breakpoint('sm')`
    width: 48%;
  `}
  ${breakpoint('md')`
    width: 48%;
  `}
`;
export const BoxImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 22%;
  .gatsby-image-wrapper {
    width: 70%
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
  width: 75%;
  p {
    font-size: 17px;
    line-height: 1.2;
    margin: 0;
    ${breakpoint('xxl')`
      font-size: 22px;
    `}
  }
`;

