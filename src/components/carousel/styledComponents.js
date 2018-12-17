import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const CarouselContainer = styled.div`
  height: ${({ full }) => full ? '100vh' : 'inherit' };
  width: 100%;
  overflow: hidden;
  position: relative;
  .slick-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    svg {
      width: 36px;
      height: 36px;
      ${breakpoint('desktop')`
        width: 48px;
        height: 48px;
      `}
    }
  }
  .slick-prev { 
    left: 2%; 
    &:before { 
      display: none; 
    } 
  }
  .slick-next { 
    right: 5%;
    ${breakpoint('desktop')`
      right: 2%;
    `}
    &:before { 
      display: none; 
    }  
  }
  .slick-dots {
    position: absolute;
    top: 90%;
    li, button {
      width: 30px;
      height: 30px;
    }
    li {
      &.slick-active {
        button {
          &:before {
            color: #FFFFFF;
          }
        }
      }
      button {
        &:before {
          color: #cfcfcf;
          font-size: 14px;
          ${breakpoint('desktop')`
            font-size: 20px;
          `}
        }
      }
    }
  }
`;