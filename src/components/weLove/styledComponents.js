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
      height: 500px;
      width: 500px;
    `}
  }
  ${breakpoint('tablet')`
    width: 55%;
  `}
  ${breakpoint('desktop')`
    height: 640px;
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
      ${breakpoint('desktop')`
        width: 300px;
      `}
      img {
        margin: 0 auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
      .video-wrapper {
        width: 120px;
        margin: auto;
        position: absolute;
        top: 14px;
        left: 0;
        bottom: 50px;
        right: -12px;
        z-index: -1;
        ${breakpoint('desktop')`
          width: 240px;
          top: 0px;
          bottom: 135px;
          right: 20px;
          -webkit-transform: translate(8%,5%);
          -ms-transform: translate(8%,5%);
          transform: translate(8%,5%);
        `}
        video {
          display: inline-block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
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
    padding-bottom: 8em;
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
  font-weight: 800;
  transition: all .5s;
  color: #F28724;
  &:hover {
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
