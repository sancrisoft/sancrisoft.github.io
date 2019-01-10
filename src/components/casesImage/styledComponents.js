import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentCases = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 2em;
  ${breakpoint('tablet')`
    flex-direction: row;
  `}
`;

export const CaseLeft = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${breakpoint('tablet')`
    width: 46%;
  `}
`;
export const CaseLeftTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${breakpoint('tablet')`
    justify-content: flex-start;
  `}
  & > .gatsby-image-wrapper {
    width: 90px;
    position: relative;
    right: 10px;
    ${breakpoint('tablet')`
      width: 100px;
    `}
    ${breakpoint('desktop')`
      width: 120px;
    `}
  }
`;
export const CaseLeftBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: .2em 0 0;
  ${breakpoint('tablet')`
    justify-content: flex-start;
  `}
`;
export const Logos = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 1.2em;
  .gatsby-image-wrapper {
    width: 120px;
  }
  .appStore {
    margin-left: 8px;
  }
`;
export const A = styled.a`
  display: flex;
  transition: all .5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CaseRight = styled.div`
  display: flex;
  width: 100%;
  ${breakpoint('tablet')`
    width: 54%;
  `}
`;
