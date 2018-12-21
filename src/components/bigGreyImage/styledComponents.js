import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  div.detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    h2, p {
      color: white;
      text-align: center;
      padding: 0 1em;
    }
  }
  .image-container {
    width: 100%;
    height: 100%;
    img {
      flex: 1;
      object-fit: cover;
      position: absolute;
      z-index: 1;
    }
  }
`;

export const GreyFilter = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.55);
  z-index: 2;
`;