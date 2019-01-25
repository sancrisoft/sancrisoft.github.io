import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.333%;
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
      filter: grayscale(1);
      transition: all .5s;
    }
    &:hover {
      img {
        filter: grayscale(0);
      }
    }
  }
`;
