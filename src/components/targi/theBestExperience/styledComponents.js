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
  ${breakpoint('md')`
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
  ${breakpoint('md')`
    padding: .8em 2em;
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
  ${breakpoint('md')`
    .slick-arrow {
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
`;

export const CarouselItem = styled.div`
  height: auto;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  position: relative;
  .gatsby-image-wrapper {
    height: 70%;
    width: 70%;
    margin: auto;
    img {
      object-fit: contain !important;
    }
  }

  ${breakpoint('lg')`
    .gatsby-image-wrapper {
      height: 500px;
      width: 500px;
    }
  `}
`;



