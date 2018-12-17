import styled from 'styled-components';

export const BackgroundItem = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarouselContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: blue;
  overflow: hidden;
  position: relative;
  .slick-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
  }
  .slick-prev { left: 1%; }
  .slick-next { right: 1%; }
  .slick-dots {
    position: absolute;
    top: 95%;
  }
`;

export const FakeItem = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ color }) => color};
`;