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

export const A = styled.a`
  display: flex;
  transition: all .5s;
`;
