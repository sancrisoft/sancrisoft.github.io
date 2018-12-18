import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

export const Box = styled.div`
  background: #ccc;
  width: 85%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  transition: all .5s;
  cursor: pointer;
  height: 250px;
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
  &:after {
    content: '';
    display: flex;
    position: absolute;
    bottom: -5%;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 15px solid #ccc;
    z-index: -2;
    transition: all .5s;
  }

  p {
    text-align: center;
  }
  h4 {
    color: #F28724;
    font-size: 22px;
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
