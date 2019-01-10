import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentOurValue = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 2em;
  ${breakpoint('sm')`
    width: 48%;
  `}
  ${breakpoint('md')`
    width: 32%;
  `}
  ${breakpoint('lg')`
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
  ${breakpoint('md')`
    width: 80%;
    flex-direction: ${({ direction }) => direction};
  `}
`;
export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  .gatsby-image-wrapper {
    width: ${({ little }) => little ? '70px' : '150px'};
    ${breakpoint('md')`
      width: ${({ little }) => little ? '60px' : '130px'};
    `}
    ${breakpoint('lg')`
      width: ${({ little }) => little ? '50px' : '150px'};
    `}
  }
`;
export const Boxtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h3, h6 {
    width: 100%;
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

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoint('md')`
    margin-left: ${({ direction }) => direction === 'row' ? '1em' : 0 };
  `}
  ${Boxtitle} {
    h6, h3 {
      text-align: center;
      ${breakpoint('md')`
        text-align: ${({ direction }) => direction === 'row' ? 'start !important' : 'center' };
      `}
    }
  }
  p {
    text-align: center;
    ${breakpoint('md')`
      text-align: ${({ direction }) => direction === 'row' ? 'start !important' : 'center' };
    `}
  }
`;
