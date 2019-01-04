import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const FooterContainer = styled.div`
  background: #fff;
`;

export const FooterPageSizer = styled.div`
    margin: 0 auto;
    max-width: 90%;
    width: 100%;
`;

export const A = styled.a`
  display: flex;
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  ${breakpoint('tablet')`
    flex-direction: row;
  `}
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${breakpoint('tablet')`
      flex-direction: row;
      align-items: center;
    `}
    & > div:first-child {
      flex-direction: column;
      align-items: center;
      padding-bottom: 1em;
      ${breakpoint('tablet')`
        flex-direction: row;
        align-items: center;
        padding-bottom: 0;
      `}
      a {
        margin: 3px 0;
        ${breakpoint('tablet')`
          margin: 0px 15px;
        `}
      }
    }
  }
`;
export const Networks = styled.div`
  display: flex;
  padding-top: 1em;
  ${breakpoint('tablet')`
    padding-top: 0;
  `}
`;
export const ContentIcon = styled.div`
  display: flex;
  margin: 0 5px;
`;

export const FooterBottom = styled.div`
  display: flex;
  padding: 1em 0em;
  .gatsby-image-wrapper {
    margin: 0 auto;
  }
`;
