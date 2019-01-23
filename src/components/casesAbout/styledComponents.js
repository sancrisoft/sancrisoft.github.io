import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 2em 0 1em;
  ${breakpoint('tablet')`
    flex-direction: row;
    padding: 2.5em 0 3em;
  `}
`;
export const AboutTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    margin-top: 0;
    text-transform: capitalize;
    margin-bottom: 1rem;
    font-size: 20px;
    ${breakpoint('tablet')`
      font-size: 18px;
    `}
    ${breakpoint('desktop')`
      font-size: 22px;
    `}
  }
`;
export const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1em;
  ${breakpoint('tablet')`
    width: 40%;
  `}
  p {
    font-size: 16px;
    line-height: 1.3;
    margin: 0 auto;
    ${breakpoint('tablet')`
      font-size: 15px;
      width: 90%;
    `}
    ${breakpoint('desktop')`
      font-size: 16px;
    `}
  }
`;
export const AboutMore = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1em;
  justify-content: space-between;
  ${breakpoint('tablet')`
    flex-direction: row;
    width: 58%;
  `}
`;
export const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${breakpoint('tablet')`
    width: 48%;
  `}
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 20px;
    ${breakpoint('tablet')`
      font-size: 18px;
    `}
    ${breakpoint('desktop')`
      font-size: 22px;
    `}
  }
`;
export const Features = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${breakpoint('tablet')`
    width: 48%;
  `}

  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 20px;
    ${breakpoint('tablet')`
      font-size: 18px;
    `}
    ${breakpoint('desktop')`
      font-size: 22px;
    `}
  }
`;



export const A = styled.a`
  transition: all .5s;
  ${'' /* margin-left: 6px; */}
  display: block;
  color: #F28724;
`;
export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  li {
    list-style: none;
    font-size: 16px;
    line-height: 1.3;
    margin-bottom: 5px;
    ${breakpoint('tablet')`
      font-size: 15px;
    `}
    ${breakpoint('desktop')`
      font-size: 16px;
    `}
    svg {
      margin-right: 5px;
      ${breakpoint('desktop')`
        margin-right: 7px;
      `}
    }
  }
`;
