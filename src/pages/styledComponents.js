import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContTestimonial = styled.section`
  display: block;
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export const PageSizer = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`;

export const WhatWeDo = styled(PageSizer)`
  padding-top: 5em;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div.processes {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${breakpoint('desktop')`
      flex-direction: row;
    `}
  }
`;
