import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: transparent;
  width: 85%;
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
  `}
  ${breakpoint('desktop')`
    width: 85%;
  `}
  &:hover {
    transform: scale(1.1);
  }
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
  height: 60%;
  background: #fff;
  p {
    text-align: center;
    font-size: 16px;
    font-style: italic;
    ${'' /* min-height: 100px; */}
    margin: 0;
    opacity: .9;
  }

`;
export const ContBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  padding: 3px 10px 8px;
  background: #383938;
  position: relative;
  h4 {
    font-size: 18px;
    text-align: center;
    margin: 0;
  }
  span {
    color: #F28724;
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
