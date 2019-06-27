import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: .5em;
  .gatsby-image-wrapper {
    width: 70px;
    transition: all .5s;
    margin: 0 auto;
    ${breakpoint('tablet')`
      width: 100px;
    `}
    ${breakpoint('desktop')`
      width: 120px;
    `}
    img {
      transition: all .5s;
    }
  }
`;


export const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
