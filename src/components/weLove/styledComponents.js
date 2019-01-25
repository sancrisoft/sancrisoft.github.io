import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Bublle from '../../images/home/bublle.png'

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  ${breakpoint('tablet')`
    flex-direction: row;
    padding-top: 3em;
  `}
`;

export const ContLeft = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 440px;
  justify-content: center;
  &:after {
    content: '';
    display: flex;
    background-image: url(${Bublle});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 90%;
    z-index: -2;
    opacity: .8;
    ${breakpoint('tablet')`
      width: 100%;
    `}
    ${breakpoint('desktop')`
      height: 400px;
      width: 400px;
    `}
  }
  ${breakpoint('tablet')`
    width: 55%;
  `}
  ${breakpoint('desktop')`
    height: 600px;
  `}
  .content-video {
    height: auto;
    width: 100%;
    display: flex;

    ${breakpoint('desktop')`
      width: initial;
    `}
    .image-wrap {
      margin: 0 auto;
      position: relative;
      width: 220px;
      height: 100%;
      display: flex;
      align-items: center;
      ${breakpoint('desktop')`
        width: 250px;
      `}
      img {
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
      img.mockup {
        z-index: 2;
      }
      img.imgGif {
        width: 177px;
        right: -12px;
        ${breakpoint('desktop')`
          width: 200px;
        `}
      }
    }
  }
`;

export const ContRight = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding-top: 1.5em;
  padding-bottom: 3em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoint('tablet')`
    width: 45%;
    padding-top: 0;
  `}
  ${breakpoint('desktop')`
    padding-bottom: 3.5em;
    padding-left: 2.5em;
  `}
`;

export const RightTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: column;
  ${breakpoint('tablet')`
    align-items: flex-start;
    justify-content: flex-start;
    padding-right: 20px;
  `}
  ${breakpoint('desktop')`
    padding-right: 0;
  `}
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 80px;
    ${breakpoint('tablet')`
      max-width: 100px;
      right: 8px;
    `}
    ${breakpoint('desktop')`
      max-width: 120px;
      right: 10px;
    `}
  }
`;
export const RightBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-top: 1em;
  flex-direction: column;
  ${breakpoint('tablet')`
    padding-right: 20px;
  `}
  ${breakpoint('desktop')`
    padding-right: 0;
  `}
  p {
    text-align: center;
    width: 100%;
    margin: 0;
    ${breakpoint('tablet')`
      text-align: left;
    `}
  }
`;

export const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1em;
  ${breakpoint('tablet')`
    padding-top: .5em;
    justify-content: flex-start;
  `}
`;
export const A = styled.a`
  text-decoration: none;
  transition: all .5s;
  color: #F28724;
  font-size: .8em;
  &:hover {
    text-decoration: underline;
    span {
      margin-left: 8px;
    }
  }
  span {
    position: relative;
    top: 2px;
    margin-left: 5px;
    transition: all .5s;
  }
`;
