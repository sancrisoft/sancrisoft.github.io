import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

export const Box = styled.div`
  background: #f8f8f8;
  width: 85%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 15px 10px;
  transition: all .5s;
  cursor: pointer;
  height: 270px;
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
  &:after {
    content: '';
    display: flex;
    position: absolute;
    bottom: -5.3%;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 15px solid #f8f8f8;
    z-index: -2;
    transition: all .5s;
  }

  p {
    text-align: center;
    font-size: 17px;
    font-style: italic;
    min-height: 100px;
  }
  h4 {
    color: #F28724;
    font-size: 20px;
    text-align: center;
  }
  span {
    text-align: center;
    display: flex;
    justify-content: center;
  }

`;

export const ContImg = styled.div`
  height: 50px;
  .gatsby-image-wrapper {
    margin: 0 auto;
  }
`;
