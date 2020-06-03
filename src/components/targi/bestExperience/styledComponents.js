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
    width: 80%;
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
  align-items: center;
  margin-left: 0;
  background: #eeeeee;
  width: 90%;
  max-width: 400px;
  margin: 1em auto 4em;
  border-radius: 40px;
  overflow: hidden;
  ${breakpoint('tablet')`
    max-width: 490px;
  `}
`;

export const TabCustom = styled(Tab)`
  cursor: pointer;
  padding: .8em .2em;
  position: relative;
  margin-bottom: 0;
  color: hsl(228,39%,23%);
  width: 33.333%;
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
  ${breakpoint('tablet')`
    font-size: 1em;
    padding: .8em 1em;
  `}
`;

export const TabPanelCustom = styled(TabPanel)`
  .slick-arrow {
    &.slick-left {
      left: 4%;
    }
    &.slick-next {
      right: 4%;
    }
    svg {
      width: 30px;
      height: 30px;
      path {
        fill: #333;
      }
    }
  }
  ${breakpoint('tablet')`
    .slick-arrow {
      top: 40%;
      svg {
        width: 48px;
        height: 48px;
      }
    }
  `}
`;

export const BackgroundItem = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
  ${breakpoint('tablet')`
    min-height: 700px;
  `}
`;

export const CarouselItem = styled.div`
  height: auto;
  position: relative;
  width: 70%;
  margin: auto;
  max-width: 380px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
    margin-bottom: 0;
  }
  ${breakpoint('tablet')`
    width: 50%;
    max-width: 420px;
  `}
`;



