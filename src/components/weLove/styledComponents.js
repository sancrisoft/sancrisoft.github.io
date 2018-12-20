import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Bublle from '../../images/home/bublle.png'

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3em;
  ${breakpoint('tablet')`
    flex-direction: row;
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
    opacity: .2;
    ${breakpoint('tablet')`
      width: 100%;
    `}
    ${breakpoint('desktop')`
      height: 500px;
      width: 500px;
    `}
  }
  ${breakpoint('tablet')`
    width: 50%;
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
  width: 50%;
  ${breakpoint('tablet')`
    width: 50%;
  `}
`;
