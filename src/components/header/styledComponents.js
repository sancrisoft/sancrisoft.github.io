import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  transition-property: all;
	transition-duration: .5s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  ${(props) => props.isWhite && css`
    background: white;
    height: 100px;
    ${breakpoint('desktop')`
      height: 70px;
    `}
    -webkit-box-shadow: 0px 6px 8px -6px rgba(0,0,0,0.07);
    -moz-box-shadow: 0px 6px 8px -6px rgba(0,0,0,0.07);
    box-shadow: 0px 6px 8px -6px rgba(0,0,0,0.07);
  `}
`;

export const HeaderPageSizer = styled.div`
    margin: 0 auto;
    max-width: 90%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;
export const Head1 = styled.h1`
  margin: 0px;
`;


export const RighSection = styled.div`
  display: flex;
  color: white;
  align-items: center;
`;
