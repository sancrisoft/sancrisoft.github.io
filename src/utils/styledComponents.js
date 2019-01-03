import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import BgTestimonials from '../images/home/desktop.jpg'

export const ContWeLove = styled.section`
  display: flex;
  padding-top: 2.5em;
  padding-bottom: 1em;
  border-bottom: 4px solid #F28724;
  h2 {
    width: 90%;
    margin: 0 auto;
    ${breakpoint('tablet')`
      width: 100%;
    `}
  }
`;

export const ContTestimonial = styled.section`
  display: flex;
  align-items: center;
  min-height: 500px;
  position: relative;
  background: rgba(0,0,0, .5);
  overflow: hidden;
  padding-top: 40px;
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
  h2 {
    width: 90%;
    margin: 0 auto;
    ${breakpoint('tablet')`
      width: 100%;
    `}
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
          &:focus {
            outline: none;
          }
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

export const PageSizer = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`;

export const WhatWeDo = styled(PageSizer)`
  padding-top: 3em;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div.processes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2em;
    ${breakpoint('desktop')`
      flex-direction: row;
      margin-top: 2em;
      justify-content: space-between;
    `}
  }
`;
