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

export const Subtitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  color: #000;
  font-family: Averta;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  line-height: 1.3;
  ${breakpoint('desktop')`
    width: 750px;
  `}
`;

export const ContentTabs = styled(Tabs)`
  width: 100%;
`;

export const TabListCustom = styled(TabList)`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
`;

export const TabCustom = styled(Tab)`
  cursor: pointer;
  padding: .8em 1em;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    transform: scale3d(0, 1, 1);
    transform-origin: left center;
    transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) 0.4s;
    background: #F28724;
  }
  &:focus {
    outline: none;
  }
  &.react-tabs__tab--selected {
    &:after {
      transform: scale3d(1, 1, 1);
      transition-delay: 0s;
    }
  }
  ${breakpoint('tablet')`
    padding: .8em 2em;
  `}
`;

export const TabPanelCustom = styled(TabPanel)`
  
`;

export const NotePlans = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 991px;
  margin: 1.8em auto 0;
`;

export const NoteTitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.1em;
  color: #000;
  font-family: Averta;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  line-height: 1.4;
`;

export const NoteList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-top: .8em;
  margin: 0;
`;

export const NoteItem = styled.li`
  display: flex;
  font-size: .9em;
  svg {
    margin-right: .3em;
    position: relative;
    top: 6px;
  }
  strong {
    color: #000;
    font-size: 1em;
  }
`;

export const ContentPrices = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 2px solid #333;
  max-width: 991px;
  margin: 0 auto;
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  ${breakpoint('tablet')`
    width: 66.666%;
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
  border-top: 2px solid #333;
  ${breakpoint('sm')`
    width: 50%;
    border-left: 2px solid #333;
    border-top: none;
  `}
`;

export const BoxInstalation = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 2px solid #333;
  padding: 1.1em;
`;

export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.4em 1.5em;
  border-top: 2px solid #333;
  ${breakpoint('tablet')`
    border-left: 2px solid #333;
    border-top: none;
    width: 33.333%;
  `}
`;

export const PriceTitle = styled.h2`
  display: flex;
  font-size: 1.5em;
  text-align: center;
  color: #000;
`;

export const Price = styled.span`
  display: flex;
  font-size: 1.5em;
  text-align: center;
  color: #000;
  padding: 0 10px;
  ${breakpoint('tablet')`
    font-size: 1.3em;
  `}
  ${breakpoint('desktop')`
    font-size: 1.5em;
  `}
`;

export const PriceDescSmall = styled.p`
  display: flex;
  text-align: center;
  font-size: .9em;
  margin-bottom: .3em;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
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

export const BtnPurchase = styled.a`
  display: flex;
  transition: all .5s;
  background: #F28724;
  text-decoration: none;
  padding: 0.7em 1.8em;
  width: 80%;
  margin: 0 auto;
  font-family: 'Averta';
  border-radius: 4px;
  color: #fff;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
  ${breakpoint('sm')`
    padding: 0.2em 1.8em;
    width: initial;
    margin: 1em auto 0;
  `}
`;

export const BtnContact = styled(BtnPurchase)`
  background: #fff;
  border: 2px solid #333;
  padding: 0.7em 1.8em;
  width: 80%;
  margin: 0 auto;
  color: #333;
  &:hover {
    border: 2px solid #F28724;
    background: #F28724;
    color: #fff;
  }
  ${breakpoint('sm')`
    padding: 0.2em 1.6em;
    width: initial;
    margin: 0 0 1em;
  `}
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

