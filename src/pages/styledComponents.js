import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

export const ContTestimonial = styled.section`
  display: block;
  min-height: 300px;
  padding-bottom: 200px;
  .slick-list {
    height: 350px;
    .slick-track {
      height: 85%;
      .slick-slide {
        height: 100%;
        display: flex;
        align-items: center;
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
