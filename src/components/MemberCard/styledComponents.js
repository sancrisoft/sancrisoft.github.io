import styled from 'styled-components'

export const GreyOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all .3s ease-in-out;
  transform: scale(0);
  z-index: -10;
  padding: 1em;
  h6, span {
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  width: 13em;
  height: 13em;
  background-color: white;
  position: relative;
  margin: 0.5em;
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
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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



