import styled, { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
// import { APP_COLORS } from '../utils/constants';
import fonts from '../fonts/fonts';

export const GlobalFonts = createGlobalStyle `
  @font-face {
    font-family: "LatoRegular";
    font-style: normal;
    font-weight: normal;
    src: local("Lato"), local("Lato"), url(${fonts.LatoRegularTTF}) format("ttf"), url(${fonts.LatoRegularWOFF}) format("woff"), url(${fonts.LatoRegularEOT}) format("eot"), url(${fonts.LatoRegularWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "LatoBold";
    font-style: normal;
    font-weight: normal;
    src: local("LatoBold"), local("LatoBold"), url(${fonts.LatoBoldTTF}) format("ttf"), url(${fonts.LatoBoldWOFF}) format("woff"), url(${fonts.LatoBoldEOT}) format("eot"), url(${fonts.LatoBoldWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "LatoLight";
    font-style: normal;
    font-weight: normal;
    src: local("LatoLight"), local("LatoLight"), url(${fonts.LatoLightTTF}) format("ttf"), url(${fonts.LatoLightWOFF}) format("woff"), url(${fonts.LatoLightEOT}) format("eot"), url(${fonts.LatoLightWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "Lato";
    font-style: normal;
    font-weight: normal;
    src: local("LatoMedium"), local("LatoMedium"), url(${fonts.LatoMediumTTF}) format("ttf"), url(${fonts.LatoMediumWOFF}) format("woff"), url(${fonts.MediumEOT}) format("eot"), url(${fonts.LatoMediumWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "Averta";
    font-style: normal;
    font-weight: normal;
    src: local("Averta"), local("Averta"), url(${fonts.AvertaTTF}) format("ttf"), url(${fonts.AvertaWOFF}) format("woff"), url(${fonts.AvertaEOT}) format("eot"), url(${fonts.AvertaWOFF2}) format("woff2");
  }
  @font-face {
    font-family: "Averta Bold";
    font-style: normal;
    font-weight: bold;
    src: local("Averta"), local("Averta"), url(${fonts.AvertaBoldOTF}) format("otf"), url(${fonts.AvertaBoldTTF}) format("ttf"), url(${fonts.AvertaBoldWOFF2}) format("woff2");
  }
`
export const H1 = styled.h1`
    font-family: Averta;
    font-size: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;
export const H2 = styled.h2`
    font-family: Averta;
    font-size: 1.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;
export const H3 = styled.h3`
    font-family: Averta;
    font-size: 1.6rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
`;
export const H4 = styled.h4`
    font-family: Averta;
    font-size: 1.4rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
`;
export const H5 = styled.h5`
    font-family: Averta;
    font-size: 1.2rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
`;
export const H6 = styled.h6`
  font-family: Averta;
  margin: 0 auto;
  text-align: center;
  font-size: .8rem;

  ${breakpoint('desktop')`
    font-size: 1rem;
  `}
`;
export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all .5s;
  &:focus {
    outline: none;
  }
`;

export const PageSizer = styled.div`
    margin: 0 auto;
    max-width: 100%;
    ${breakpoint('desktop')`
      width: 100%;
      max-width: 1024px;
    `}
`;
