import styled, { css, keyframes } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
`

export const ContentCases = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0 1em;
  ${breakpoint('md')`
    flex-direction: row;
  `}
`;

export const CaseLeft = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${breakpoint('md')`
    width: 60%;
  `}
  ${breakpoint('lg')`
    width: 55%;
  `}
`;
export const CaseLeftTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${(props) => props.marginBottom && css`
    margin-bottom: ${props.marginBottom};
  `}
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
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: .2em 0 0;
  ${breakpoint('md')`
    justify-content: flex-start;
  `}
  h2 {
    ${breakpoint('xl')`
      font-size: 2.2rem;
    `}
    ${breakpoint('xxl')`
      font-size: 2.6rem;
    `}
  }
  p {
    font-size: 1em;
    margin-top: 10px;
    ${breakpoint('md')`
      font-size: 1em;
      line-height: 1.5;
    `}
    ${breakpoint('lg')`
      font-size: 1.1em;
      width: 450px;
    `}
    &.long-text{
      margin-top: 10px;
    }
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
export const ContentPurchase = styled.div`
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


export const BtnPurchase = styled.a`
  display: flex;
  transition: all .5s;
  background: #F28724;
  text-decoration: none;
  padding: 0.5em 2em;
  font-family: 'Averta';
  border-radius: 4px;
  color: #fff;
  margin-top: 1em;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CaseRight = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1.5em;
  ${breakpoint('md')`
    width: 40%;
    padding-top: 0;
  `}
  ${breakpoint('lg')`
    width: 45%;
  `}
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
    object-fit: contain;
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



export const ArrowAnimated = styled.div`
  display: flex;
  padding: 4rem 1rem 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  svg {
    animation: ${bounce} 3.5s infinite;
  }
`;
