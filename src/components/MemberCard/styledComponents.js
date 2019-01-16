import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const IconLink = styled.a`
  width: 30px;
  height: 30px;
  ${breakpoint('desktop')`
    width: 35px;
    height: 35px;
    justify-content: center;
  `}
  box-sizing: border-box;
  box-shadow: 0 15px 15px 0px rgba(0,0,0,0.1);
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GreyOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: all .3s ease-in-out;
  transform: scale(0);
  z-index: -10;
  padding: 1em;
  h6 {
    position: absolute;
    top: 70px;
    padding: 0 20px;
  }
  h4, span {
    text-align: center;
  }
  span {
    padding-bottom: 1em;
  }
  div.social-media {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      cursor: pointer;
      transition: all .5s;
      &:nth-child(1):hover {
        svg {
          path {
            fill: #f89800;
          }
        }
      }
      &:nth-child(2):hover {
        svg {
          path {
            fill: #00acee;
          }
        }
      }
      &:nth-child(3):hover {
        svg {
          path {
            fill: #0077b5;
          }
        }
      }
      &:hover {
        transform: scale(1.1);
      }
      svg {
        path {
          transition: all .5s;
        }
      }
    }
  }
`;

export const CardContainer = styled.div`
  width: 9em;
  height: 9em;
  background-color: white;
  position: relative;
  margin: 0.5em;
  ${breakpoint('desktop')`
    width: 13em;
    height: 13em;
  `}
  div.first-details {
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,0.65);
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.2em;
    opacity: 1;
    transition: all .3s ease-in-out;
    transform: scale(1);
    min-height: 50px;

    ${breakpoint('tablet')`
      min-height: 60px;
    `}
    ${breakpoint('desktop')`
      min-height: 70px;
    `}

    h4 {
      font-size: 14px;
      margin-bottom: 0;
      text-shadow: 1px 1px 2px #333;
      ${breakpoint('tablet')`
        font-size: 18px;
      `}
      ${breakpoint('desktop')`
        font-size: 18px;
      `}
    }
    span {
      font-size: 9px;
      padding: 0 20px;
      line-height: 11px;
      margin-top: 5px;
      text-align: center;
      ${breakpoint('tablet')`
        font-size: 10px;
        line-height: 12px;
      `}
      ${breakpoint('desktop')`
        font-size: 13px;
        line-height: 16px;
      `}
    }
  }
  &:hover {
    ${GreyOverlay} {
      opacity: 1;
      background-color: rgba(0,0,0,0.55);
      transform: scale(1);
      color: white;
      z-index: 4;
    }
    div.first-details {
      opacity: 0;
      transform: scale(0);
    }
  }
  .avatar {
    width: 100%;
    height: 100%;
    position: absolute;
    img {
      flex: 1;
      object-fit: cover;
    }
  }
`;
