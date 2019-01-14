import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

export const ContentAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2em 0 1em;
`;
export const AboutTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    text-transform: capitalize;
  }
`;
export const AboutDescription = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1em;
`;
export const AboutMore = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1em;
`;
export const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const Features = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;



export const A = styled.a`
  transition: all .5s;
  margin-left: 6px;
`;
export const UL = styled.ul`
  display: flex;
  flex-direction: column;
`;
