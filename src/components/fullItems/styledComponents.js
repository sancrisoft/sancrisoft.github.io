import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const BackgroundItem = styled.div`
  color: white;
  width: 100%;
  height: 100%;
`;

export const CarouselItem = styled.div`
  height: 100vh;
  width: 100vw;
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  position: relative;
  div.gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
  div.grey-filter {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.55);
    z-index: 1;
  }
  div.detail-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div.detail {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 72%;
      ${breakpoint('tablet')`
        width: 50%;
      `}
      ${breakpoint('desktop')`
        width: 45%;
      `}
      z-index: 3;
      h3, span, a {
        color: white;
        text-align: center;
      }
      h3 {
        font-size: 1.3rem;
        letter-spacing: 0.03rem;
        ${breakpoint('tablet')`
          font-size: 2rem;
        `}
      }
      span {
        margin-top: 2em;
      }
      a {
        margin-top: 3em;
        background-color: #F28724;
        border-radius: 4px;
        text-decoration: none;
        padding: 0.5em 1em;
        font-family: 'Averta';
        transition: all 0.3s ease;

        &:hover {
          background: #ffa44f !important;
        }
      }
    }
  }
`;
