import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const FooterContainer = styled.div`
  background: #fff;
  -webkit-box-shadow: 0px 0px 7px -3px rgba(0,0,0,0.46);
  -moz-box-shadow: 0px 0px 7px -3px rgba(0,0,0,0.46);
  box-shadow: 0px 0px 7px -3px rgba(0,0,0,0.46);
  padding-top: 1.2rem;
  padding-bottom: 1.5rem;
  margin-top: 1px;
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
    padding: 1em 0;
  `}
  ${breakpoint('desktop')`
    padding: 1em;
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
          margin: 0px 8px;
          font-size: .8em;
        `}
        ${breakpoint('desktop')`
          font-size: .9em;
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
  a {
    &.facebook:hover {
      svg {
        path {
          fill: #3b5998;
        }
      }
    }
    &.instagram:hover {
      svg {
        path, polygon {
          fill: #bc2a8d;
        }
      }
    }
    &.twitter:hover {
      svg {
        path {
          fill: #00acee;
        }
      }
    }
    svg {
      path, polygon {
        transition: all .5s;
      }
    }
  }
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

export const Address = styled.div`
  margin: .8rem 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span, a {
    font-family: Averta;
    font-size: .7rem;
  }

  a {
    color: #F28724;
  }

  ${breakpoint('tablet')`
    flex-direction: row;
    align-items: flex-start;

    span {
      margin-right: .3rem;
    }
  `}
`;
