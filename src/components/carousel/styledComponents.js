import styled from 'styled-components';

export const BackgroundItem = styled.div`
  color: white;
  width: 100%;
  height: 100%;
`;

export const CarouselContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  .slick-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
  }
  .slick-prev { 
    left: 2%; 
    &:before { 
      display: none; 
    } 
  }
  .slick-next { 
    right: 2%;
    &:before { 
      display: none; 
    }  
  }
  .slick-dots {
    position: absolute;
    top: 90%;
    li, button {
      width: 30px;
      height: 30px;
    }
    li {
      &.slick-active {
        button {
          &:before {
            color: #FFFFFF;
          }
        }
      }
      button {
        &:before {
          color: #cfcfcf;
          font-size: 20px;
        }
      }
    }
  }
`;

export const CarouselItem = styled.div`
  height: 100vh;
  width: 100vw;
  img {
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
      width: 40%;
      z-index: 3;
      h3, span, a {
        color: white;
        text-align: center;
      }
      span {
        margin-top: 2em;
      }
      a {
        margin-top: 3em;
        background-color: #F28724;
        border-radius: 50px;
        text-decoration: none;
        padding: 1em;
        
      }
    }
  }
`;