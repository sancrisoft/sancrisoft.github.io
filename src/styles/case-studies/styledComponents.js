import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const ContentCase = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentProyects = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 0 3em;
`;
export const ContainerProyect = styled.div`
  margin: 0 auto;
  max-width: 90%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  ${breakpoint('tablet')`
    max-width: 80%;
  `}
  ${breakpoint('desktop')`
    max-width: 70%;
  `}
`;

export const BoxAboutFinal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 2em;
  ${breakpoint('tablet')`
    width: 48%;
  `}
  ${breakpoint('desktop')`
    width: 31%;
  `}
  p {
    font-size: 16px;
    margin-bottom: 1rem;
    text-align: center;
    ${breakpoint('tablet')`
      font-size: 15px;
    `}
    ${breakpoint('desktop')`
      font-size: 16px;
    `}
  }
  button {
    width: 165px;
    margin: 0 auto;
    padding: 8px 20px !important;
  }
`;

export const ContentLogos = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
`;
export const ContainerLogos = styled.div`
  margin: 0 auto;
  max-width: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  height: 10em;
  margin: 1.5em 0;
  flex-wrap: wrap;
  ${breakpoint('tablet')`
    max-width: 80%;
  `}
  ${breakpoint('desktop')`
    max-width: 70%;
  `}
`;
