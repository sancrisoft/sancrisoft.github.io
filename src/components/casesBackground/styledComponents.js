import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentBackground = styled.div`
  display: flex;
  width: 100%;
  padding: 2em 0 1em;
  .gatsby-image-wrapper {
    width: 85%;
    margin: 0 auto;
    position: relative;
    ${breakpoint('tablet')`
      width: 600px;
    `}
    ${breakpoint('desktop')`
      width: 750px;
    `}
  }
`;
