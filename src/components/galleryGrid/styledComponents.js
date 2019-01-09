import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const GridContainer = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  ${breakpoint('tablet')`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${breakpoint('desktop')`
    grid-template-columns: repeat(4, 1fr);
  `}
`;

export const ImageContainer = styled.div`
  grid-column: span ${({ colSpan }) => colSpan};
  grid-row: span ${({ rowSpan }) => rowSpan};
`;

