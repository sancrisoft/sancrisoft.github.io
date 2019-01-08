import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentOurValue = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 2em;
  ${breakpoint('tablet')`
    width: 32%;
  `}
  ${breakpoint('desktop')`
    width: 24%;
  `}
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  ${breakpoint('tablet')`
    width: 80%;
  `}
`;
export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  .gatsby-image-wrapper {
    width: 150px;
    ${breakpoint('tablet')`
      width: 130px;
    `}
    ${breakpoint('desktop')`
      width: 150px;
    `}
  }
`;
export const Boxtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 20px;
  }
`;
export const BoxDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    font-size: 16px;
    line-height: 1.2;
  }
`;
