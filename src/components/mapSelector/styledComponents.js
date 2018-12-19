import styled from 'styled-components';
import { PageSizer, H3 } from '../styledComponents';
import breakpoint from 'styled-components-breakpoint';

export const ButtonSelector = styled.button`
  background-color: #f5f7fa;
  border: none;
  color: black;
  cursor: pointer;
  transition: all .25s ease-in-out;
  opacity: 0.45;
  border-bottom: 0px solid #f5f7fa;
  height: 15em;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  ${breakpoint('desktop')`
    h4 {
      width: 100%;
      text-align: start;
    }
  `}  
  &:active, &:visited {
    border: none;
  }
  &:hover, &.active {
    transform: scale(1.05);
    opacity: 1;
    border-bottom: 4px solid #F28724;
  }
  &:focus {
    outline: 0;
  }
`;

export const SectionContainer = styled.section`
  padding-top: 5em;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #f5f7fa;
  ${PageSizer}.buttons-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    ${breakpoint('desktop')`
      padding: 0 8em;
    `}
  }
  .map-container {
    margin-top: 8px;
    width: 100%;
    height: 65vh;
  }
  ${H3}.section-heading {
    margin-bottom: 3em;
  }
`;

export const Column = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoint('desktop')`
    justify-content: flex-start;
    align-items: flex-start;
  `}
`;