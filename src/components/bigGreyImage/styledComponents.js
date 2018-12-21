import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  div.detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4, p {
      color: white;
    }
  }
  .image-container {
    flex: 1;
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