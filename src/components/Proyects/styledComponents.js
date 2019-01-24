import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Box = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2em;
  border-radius: 8px;
  overflow: hidden;
  transition: all .5s;
  ${breakpoint('tablet')`
    width: 48%;
  `}
  ${breakpoint('desktop')`
    width: 31%;
    height: 230px;
  `}
`;

export const BoxImage = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  cursor: default;
  .gatsby-image-wrapper {
    width: 100%;
    transition: all .5s;
    img {
      filter: grayscale(1);
      transition: all .5s;
    }
    &:hover {
      img {
        filter: grayscale(0);
      }
    }
  }
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  background: rgba(0,0,0, .7);
  color: #fff;
  padding: 0 10px;
  h4 {
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 0;
    text-shadow: 1px 1px 2px #333;
    text-transform: capitalize;
  }
  span {
    font-size: 14px;
    text-shadow: 1px 1px 2px #333;
  }
`;
