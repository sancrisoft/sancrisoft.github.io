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

export const ContentPrices = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
  padding: 1rem;
  justify-content: space-between;
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${breakpoint('tablet')`
    width: 68%;
  `}
`;

export const BoxMonthly = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 2.5em 1.5em 3.2em;
  position: relative;
  ${breakpoint('sm')`
    width: 50%;
  `}
`;
export const BoxAnnual = styled(BoxMonthly)`
  background-color: #eeeeee;
  ${breakpoint('sm')`
    width: 50%;
  `}
`;

export const InstallationBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.1em;
  background-color: cyan;
`;

export const BoxRight = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.4em 1.5em;
  ${breakpoint('tablet')`
    width: 30%;
  `}
`;

export const PriceTitle = styled.h4`
  color: hsl(228, 39%, 23%);
`;

export const Price = styled.span`
  // display: flex;
  // font-size: 1.5em;
  // text-align: center;
  // color: #000;
  // padding: 0 10px;
  // ${breakpoint('tablet')`
  //   font-size: 1.3em;
  // `}
  // ${breakpoint('desktop')`
  //   font-size: 1.5em;
  // `}
`;

export const PriceDescSmall = styled.p`
  display: flex;
  font-size: .9em;
  margin-bottom: .3em;
  // justify-content: center;
//   align-items: center;
//   line-height: 1.5;
  &.descPlans {
    width: 64%;
    margin: auto;
    min-height: 55px;
  }
  ${breakpoint('tablet')`
    font-size: .8em;
  `}
  ${breakpoint('desktop')`
    font-size: .9em;
  `}
`;

export const PriceDescBig = styled.p`
  display: flex;
  text-align: center;
  padding-top: 1em;
  font-size: 1.1em;
  margin-bottom: 0;
  padding-bottom: .8em;
  &.descPrice {
    max-width: 230px;
    margin: auto;
  }
  &.descSolution {
    width: 90%;
    margin: auto;
    font-size: 1.2em;
    padding-bottom: 2em;
    padding-top: 0;
    color: #9B9BA6;
  }
  ${breakpoint('tablet')`
    font-size: .9em;
    &.descSolution {
      font-size: 1em;
    }
  `}
  ${breakpoint('desktop')`
    font-size: 1.1em;
    &.descSolution {
      font-size: 1.2em;
      width: 80%;
      padding-bottom: 0;
    }
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
`;

export const LowestPrice = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
  justify-content: center;
  svg {
    margin-right: .2em;
  }
`;

