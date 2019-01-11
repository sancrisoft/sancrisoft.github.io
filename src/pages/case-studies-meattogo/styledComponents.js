import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const ContentCase = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CasePageSizer = styled.div`
    margin: 0 auto;
    max-width: 90%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    ${breakpoint('tablet')`
      max-width: 90%;
    `}
    ${breakpoint('desktop')`
      max-width: 78%;
    `}
`;

export const ContentBack = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f1f1f1;
  padding: 2em 0;
`;

export const ContentAbout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
`;
