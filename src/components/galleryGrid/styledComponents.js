import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const GridContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, 25vh);
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
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    img {
      object-fit: cover !important;
    }
  }
`;

