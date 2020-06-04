import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const ContentPolicy = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em 1.5em;
  strong {
    color: #000;
    font-family: Averta Bold;
  }
`;

export const TitlePolicy = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  padding: 1.8em 0 0em;
  text-align: center;
  line-height: 1.4;
  font-weight: 200;
  color: #F28724;
  ${breakpoint('desktop')`
    font-size: 1.8em;
  `}
`;

export const SubtitlePolicy = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  line-height: 1.4;
  padding-bottom: .2em;
`;

export const PolicyDesc = styled.p`
  font-size: .9em;
  line-height: 1.3;
`;

export const BoxPolicy = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: .5em;
  span {
    width: 100%;
    margin-bottom: .5em;
  }
`;

export const BoxTitle = styled.h2`
  display: flex;
  flex-wrap: wrap;
  padding-top: .5em;
  font-size: 1em;
  text-transform: uppercase;
  width: 100%;
  font-family: Averta Bold;
  color: #000;
  line-height: 1.4;
`;

export const BoxSubtitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: .5em;
  font-size: .9em;
  width: 100%;
  font-family: Averta Bold;
  color: #000;
`;

export const BoxDesc = styled.p`
  font-size: .9em;
  line-height: 1.3;
  &.info {
    width: 100%;
    margin-bottom: 0;
    margin-top: 15px;
  }
  &.boxSeparate {
    strong.strongTitle {
      display: block;
    }
  }
`;

export const BoxList = styled.ul`
  &.styleNone {
    list-style: none;
  }
`;

export const BoxItem = styled.li`
  font-size: .9em;
  line-height: 1.3;
`;

export const Back = styled.a`
  display: flex;
  max-width: 220px;
  background: #F28724;
  border: 1px solid #F28724;
  padding: 4px 16px;
  transition: all 0.3s ease;
  text-decoration: none;
  border-radius: 4px;
  color: #fff;
  margin: 1.5em 0 1em;
  &:hover {
    background-color: #ffa44f;
  }
`;