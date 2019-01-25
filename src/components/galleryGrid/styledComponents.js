import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;
  grid-gap: 5px;
  overflow: hidden;
  ${breakpoint('tablet')`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${breakpoint('desktop')`
    height: 80vh;
    grid-template-columns: repeat(4, 1fr);
  `}
`;

export const ImageContainer = styled.div`
  grid-column: ${({ mobileColSpan }) => mobileColSpan ? ('span ' + mobileColSpan) : 'unset'};
  grid-row: ${({ mobileRowSpan }) => mobileRowSpan ? ('span ' + mobileRowSpan) : 'unset'};
  ${breakpoint('tablet')`
    grid-column: ${({ tabletColSpan }) => tabletColSpan ? ('span ' + tabletColSpan) : 'unset'};
    grid-row: ${({ tabletRowSpan }) => tabletRowSpan ? ('span ' + tabletRowSpan) : 'unset'};
  `}
  ${breakpoint('desktop')`
    grid-column: ${({ colSpan }) => colSpan ? ('span ' + colSpan) : 'unset'};
    grid-row: ${({ rowSpan }) => rowSpan ? ('span ' + rowSpan) : 'unset'};
  `}
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
`;

