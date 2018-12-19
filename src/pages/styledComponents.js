import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';
import BgTestimonials from '../images/home/desktop.jpg'

export const ContTestimonial = styled.section`
  display: flex;
  align-items: center;
  min-height: 500px;
  position: relative;
  background: rgba(0,0,0, .5);
  &:after {
    content: '';
    display: block;
    background-image: url(${BgTestimonials});
    background-size: cover;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .5;
  }
  .slick-slider {
    padding-top: 20px;
    .slick-list {
      height: 420px;
      .slick-track {
        height: 85%;
        .slick-slide {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .slick-dots {
    li {
      &.slick-active {
        button:before {
          color: #F28724;
        }
      }
      button:before {
        color: #F28724;
      }
    }
  }
`;
