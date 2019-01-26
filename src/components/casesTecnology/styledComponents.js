import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentTecnology = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.333%;
  padding: 2em 0 1em;
  justify-content: center;
  align-items: center;
  ${breakpoint('tablet')`
    width: 120px;
  `}
  .gatsby-image-wrapper {
    width: 45px;
    position: relative;
    ${breakpoint('tablet')`
      width: 60px;
    `}
    ${breakpoint('desktop')`
      width: 50px;
    `}
  }
  span {
    font-size: .8em;
    font-weight: 800;
    line-height: 0.9em;
    text-align: center;
    margin-top: 8px;
    ${breakpoint('tablet')`
      font-size: .9em;
    `}
  }
`;
