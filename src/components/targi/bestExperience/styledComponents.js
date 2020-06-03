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
  .slick-slider {
    max-width: 320px;
    margin: auto;
  }
  .slick-arrow {
    &.slick-prev {
      right: 1%;
    }
    &.slick-next {
      right: 7%;
    }
    svg {
      width: 30px;
      height: 30px;
      path {
        fill: hsl(228,39%,23%);
      }
    }
  }
  ${breakpoint('tablet')`
    .slick-slider {
      max-width: 650px;
    }
    .slick-arrow {
      top: 40%;
      &.slick-prev {
        left: 16%;
      }
      &.slick-next {
        right: 20%;
      }
    }
  `}
  ${breakpoint('desktop')`
    .slick-arrow {
      &.slick-prev {
        left: 12%;
      }
      svg {
        width: 40px;
        height: 40px;
      }
      &.slick-next {
        right: 18%;
        svg {
          width: 45px;
          height: 45px;
        }
      }
    }
  `}
`;

export const BackgroundItem = styled.div`
  color: white;
  width: 90%;
  height: 100%;
  max-width: 280px;
  margin: auto;
  &:focus {
    outline: none;
  }
  ${breakpoint('tablet')`
    width: 100%;
    min-height: 700px;
    max-width: 420px;
  `}
`;

export const CarouselItem = styled.div`
  height: auto;
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
    margin-bottom: 0;
  }
`;



