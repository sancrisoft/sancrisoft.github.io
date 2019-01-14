import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: transparent;
  width: 310px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 0;
  transition: all .5s;
  cursor: pointer;
  height: 300px;
  position: relative;
  box-shadow: 0px 2px 8px #333;
  ${breakpoint('tablet')`
    width: 320px;
    &:hover {
      transform: scale(1.1);
    }
  `}
  ${breakpoint('desktop')`
    width: 300px;
  `}
  &:focus {
    outline: none;
  }
`;

export const ContDescripcion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 10px 40px;
  height: 65%;
  background: #fff;
  position: relative;
  .quote-left {
    position: absolute;
    left: 8%;
    top: 8%;
  }
  p {
    text-align: center;
    font-size: 14px;
    font-style: italic;
    line-height: 1.2;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0;
    opacity: .9;
    height: 100%;
    padding-top: 30px;
    width: 90%;
    margin: 0 auto;
  }

`;
export const ContBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 35%;
  padding: 3px 10px 8px;
  background: #f1f1f1;
  position: relative;
  h4 {
    font-size: 18px;
    text-align: center;
    margin: 0;
    text-transform: capitalize;
  }
  span {
    color: #383938;
    font-size: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
`;
export const ContImg = styled.div`
  height: 40px;
  position: relative;
  top: -40%;
  .gatsby-image-wrapper {
    margin: 0 auto;
    img {
      margin-bottom: 0;
      border-radius: 50%;
      overflow: hidden;
      object-position: center;
      object-fit: cover;
      width: 55px;
    }
  }
`;
