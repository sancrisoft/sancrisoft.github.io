import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentCases = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 3em 0 3.5em;
  ${breakpoint('md')`
    flex-direction: row;
  `}
`;

export const CaseLeft = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${breakpoint('md')`
    width: 40%;
  `}
  ${breakpoint('lg')`
    width: 45%;
  `}
`;
export const CaseLeftTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${breakpoint('md')`
    justify-content: flex-start;
  `}
  & > .gatsby-image-wrapper {
    width: 90px;
    ${(props) => props.widthImage && css`
      width: ${props.widthImage};
    `}
    position: relative;
    right: 10px;
    ${breakpoint('md')`
      width: 100px;
      ${(props) => props.widthImage && css`
        width: ${props.widthImage};
      `}
    `}
    ${breakpoint('xl')`
      width: 120px;
      ${(props) => props.widthImage && css`
        width: ${props.widthImage};
      `}
    `}
  }
`;
export const CaseLeftBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: .2em 0 0;
  ${breakpoint('md')`
    justify-content: flex-start;
  `}
  p {
    font-size: 1em;
    ${breakpoint('md')`
      font-size: .9em;
      line-height: 1.4;
    `}
    ${breakpoint('lg')`
      font-size: 1em;
      line-height: 1.5;
    `}
  }
`;
export const Logos = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 1.2em;
  .gatsby-image-wrapper {
    width: 120px;
  }
  .appStore {
    margin-left: 8px;
  }
`;
export const A = styled.a`
  display: flex;
  transition: all .5s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CaseRight = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1.5em;
  ${breakpoint('md')`
    width: 60%;
    padding-top: 0;
  `}
  ${breakpoint('lg')`
    width: 55%;
  `}
`;
export const ExternalLink = styled.a`
  display: flex;
  padding: 5px 12px;
  background: #F28724;
  margin: 0px;
  color: white;
  border-radius: 3px;
  font-size: 0.9rem;
  text-decoration: none;
  &:hover{
    background-color: #ffa44f;
  }
`;
export const CaseRightImage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: relative;
  transition: all .5s;
  ${breakpoint('sm')`
    width: 500px;
  `}
  ${breakpoint('md')`
    width: 100%;
  `}
  ${breakpoint('xl')`
    width: 90%;
  `}
  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    transition: all .5s;
    ${breakpoint('md')`
      height: 85%;
    `}
    ${breakpoint('lg')`
      height: 95%;
    `}
    ${breakpoint('xl')`
      height: 100%;
    `}
  }
`;
