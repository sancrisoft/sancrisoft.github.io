import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const FooterContainer = styled.div`
  background: #fff;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5em 1em 2em;
  ${breakpoint('tablet')`
    flex-direction: row;
  `}
  & > div:first-child {
    flex-direction: column;
    align-items: center;
    ${breakpoint('tablet')`
      flex-direction: row;
      align-items: flex-start;
    `}
    a {
      margin: 3px 0;
      ${breakpoint('tablet')`
        margin: 0px 15px;
      `}
    }
  }
`;
export const Networks = styled.div`
  display: flex;
`;
export const FooterBottom = styled.div`
  display: flex;
  padding: .5em 1em 2em;
  .gatsby-image-wrapper {
    margin: 0 auto;
  }
`;
