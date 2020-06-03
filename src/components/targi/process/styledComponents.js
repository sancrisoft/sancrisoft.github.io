import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const BoxProcess = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 1em 1em;
  margin: 1em auto 0;
  ${breakpoint('md')`
    margin: 3em auto 0;
  `}
`;

export const ProcessList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 230px;
  margin: 0 auto;
  list-style: none;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background: hsl(12, 88%, 59%);
    height: 80%;
    width: 5px;
    top: 0;
    bottom: 0;
    left: 39px;
    margin: auto;
    z-index: 5;
  }
  ${breakpoint('tablet')`
    max-width: 700px;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    &:after {
      height: 5px;
      width: 80%;
      top: 35px;
      left: 0;
      right: 0;
      bottom: initial;
    }
  `}
  ${breakpoint('desktop')`
    max-width: 800px;
  `}
`;

export const ProcessItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  position: relative;
  z-index: 9;
  ${breakpoint('tablet')`
    margin-bottom: 0;
    flex-direction: column;
  `}
`;

export const ProcessCircle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 2em;
  width: 70px;
  height: 70px;
  background: hsl(12, 88%, 59%);
  color: #fff;
  padding-bottom: 5px;
`;

export const ProcessText = styled.p`
  display: flex;
  position: relative;
  font-size: 1em;
  line-height: 1.3;
  padding-left: 1em;
  width: 150px;
  margin: 0 auto;
  color: hsl(228, 39%, 23%);
  ${breakpoint('tablet')`
    text-align: center;
    padding-left: 0;
    top: 1em;
    font-size: 1rem;
  `}
`;
