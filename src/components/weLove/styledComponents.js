import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

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
      width: 280px;
      ${breakpoint('desktop')`
        width: 380px;
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
        width: 130px;
        margin: auto;
        position: absolute;
        top: 31px;
        left: 0;
        bottom: 10px;
        right: 0;
        z-index: -1;
        ${breakpoint('desktop')`
          width: 255px;
          top: 50px;
          bottom: 100px;
          right: 40px;
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
