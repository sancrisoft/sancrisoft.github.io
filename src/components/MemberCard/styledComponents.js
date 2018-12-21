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
  align-items: flex-end;
  justify-content: flex-end;
  transition: all .3s ease-in-out;
  transform: scale(0);
  z-index: -10;
  padding: 1em;
  h6, span {
    text-align: center;
  }
  div.social-media {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  width: 8em;
  height: 8em;
  background-color: white;
  position: relative;
  margin: 0.5em;
  h6, span {
    font-size: 0.8em;
  }
  ${breakpoint('desktop')`
    width: 13em;
    height: 13em;
    h6, span {
      font-size: 1em;
    }
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



