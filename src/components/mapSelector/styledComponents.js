import styled from 'styled-components';
import { PageSizer } from '../styledComponents';
// Breakpoint import if needed

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
  &:active, &:visited {
    border: none;
  }
  &:hover, &.active {
    transform: scale(1.05);
    opacity: 1;
    border-bottom: 10px solid #F28724;
  }
`;

export const SectionContainer = styled.section`
  padding-top: 5em;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: column;
  background-color: #f5f7fa;
  ${PageSizer}.buttons-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .map-container {
    margin-top: 8px;
    width: 100%;
    height: 100%;
  }
`;

export const Column = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;