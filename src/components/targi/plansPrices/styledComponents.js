import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

export const BoxCase = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  width: 100%;
  margin: auto;
  padding: 1.5em 0;
  height: auto;
  ${breakpoint('tablet')`
    padding: 1.5em 1em;
  `}
`;

export const ContentTabs = styled(Tabs)`
  width: 100%;
`;

export const TabListCustom = styled(TabList)`
  list-style: none;
  display: flex;
  justify-content: center;
  background: #eeeeee;
  max-width: 400px;
  margin: 1em auto 4em auto;
  border-radius: 40px;
  overflow: hidden;
`;

export const TabCustom = styled(Tab)`
  cursor: pointer;
  padding: .8em .2em;
  margin-bottom: 0;
  color: hsl(228,39%,23%);
  width: 50%;
  transition: all .5s;
  font-size: .9em;
  &:focus {
    outline: none;
  }
  &:hover,
  &.react-tabs__tab--selected {
    background: hsl(12,88%,59%);
    color: #fff;
  }
`;

export const TabPanelCustom = styled(TabPanel)``;

export const PageSizer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 1em;
    ${breakpoint('tablet')`
      max-width: 900px;
    `}
`;

export const CallToAction = styled.button`
  font-family: 'BeVietnamMedium', sans-serif;
  font-size: 0.8rem;
  background-color: hsl(12, 88%, 59%);
  color: #fff;
  border: 0 none;
  padding: 0.8rem 1.5rem 1rem 1.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
  line-height: 1rem;
  outline: 0 none;
  width: 160px;
`;

export const CallToActionWhite = styled(CallToAction)`
  color: hsl(12, 88%, 59%);
  background-color: #ffffff;
`;

export const CallToActionSecondary = styled(CallToAction)`
  border: solid 3px hsl(12, 88%, 59%);
  background-color: transparent;
  color: hsl(12, 88%, 59%);
`;

export const Plans = styled.div`
  ${breakpoint('tablet')`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  `}
`;

export const PlanPanel = styled.div`
  background-color: #eeeeee;
  padding: 2rem 0.5rem 6rem 0.5rem;
  max-width: 300px;
  position: relative;
  margin: 0 auto 0 auto;
  h4 {
    color: hsl(228,39%,23%);
  }
  ${breakpoint('tablet')`
    max-width: none;
    width: 33%;
    ${CallToAction} {
      position: absolute;
      bottom: 30px;
      left: 50%;
      margin-left: -80px;
    }
  `}
`;

export const PlanPanelYear = styled.div`
  background-color: hsl(228,39%,23%);
  color: #ffffff;
  padding: 1rem 0.5rem;
  max-width: 300px;
  outline: solid 30px hsl(228,39%,23%);
  z-index: 99;
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  ${breakpoint('tablet')`
    max-width: none;
    width: calc(33% - 50px);
    ${CallToActionWhite} {
      position: absolute;
      bottom: 10px;
      left: 50%;
      margin-left: -80px;
    }
  `}
`;

export const CustomSolutions = styled.div`
  background-color: #eeeeee;
  padding: 4rem 1.5rem 2rem 1.5rem;
  max-width: 300px;
  position: relative;
  margin: 0 auto;
  h4 {
    color: hsl(228,39%,23%);
  }
  p {
    margin-top: 2rem;
  }
  ${breakpoint('tablet')`
    max-width: none;
    width: 33%;
    padding-top: 2rem;
    ${CallToAction} {
      position: absolute;
      bottom: 30px;
      left: 50%;
      margin-left: -80px;
    }
  `}
`;

export const Price = styled.p`
  margin-top: 2rem;
  padding: 0 1rem;
  span.currency{
    
  }
  span.amount{
    font-family: 'BeVietnamBold', sans-serif;
    font-size: 2rem;
  }
`;

export const SetupCost = styled.div`
  margin-top: 2rem;
`;
