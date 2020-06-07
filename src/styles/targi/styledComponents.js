import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby';

/*
* Primary Colors 
* Dark Blue: hsl(228, 39%, 23%)
* Bright Red: hsl(12, 88%, 59%)
*
* Neutral Colors
* Dark Grayish Blue: hsl(227, 12%, 61%)
* Very Dark Blue: hsl(233, 12%, 13%)
* Very Pale Red: hsl(13, 100%, 96%)
* Vary Light Gray: hsl(0, 0%, 98%)
*/

export const GlobalContainer = styled.div`
  font-family: 'BeVietnamRegular', sans-serif;
  font-size: 16px;
`;

export const PageSizer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 1em;
    ${breakpoint('tablet')`
      max-width: 1024px;
    `}
    ${breakpoint('desktop')`
      max-width: 1440px;
    `}
`;

export const Hero = styled.section`
  text-align: center;
  padding: 2rem 0;
  background: url(${props => props.bg}) top center repeat-x;
  background-size: cover;
  
  h1{
    font-family: 'BeVietnamBold', sans-serif;
    color: hsl(228, 39%, 23%);
    font-size: 2.5rem;
    padding: 1rem 0;
    max-width: 600px;
  }

  h2 {
    font-family: 'BeVietnamMedium', sans-serif;
    color: hsl(228, 39%, 23%);
    font-size: 2rem;
  }
  
  h3 {
    font-family: 'BeVietnamMedium', sans-serif;
    color: #9B9BA6;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 3rem;
  }

  img {
    margin-top: 3rem;
  }

  ${breakpoint('tablet')`
    text-align: left;
    ${PageSizer} {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    
    img {
      max-height: 500px;
      margin: 0;
    }

    h1{
      font-size: 3rem;
    }
  `}
`

export const CallToAction = styled(AnchorLink)`
  font-family: 'BeVietnamMedium', sans-serif;
  font-size: 0.8rem;
  background-color: hsl(12, 88%, 59%);
  color: #fff;
  border: 0 none;
  padding: 0.8rem 1.5rem 1rem 1.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
  line-height: 1rem;
  outline: 0 none;
  text-decoration: none;
`;

export const CallToActionLink = styled(Link)`
  font-family: 'BeVietnamMedium', sans-serif;
  font-size: 0.8rem;
  background-color: hsl(12, 88%, 59%);
  color: #fff;
  border: 0 none;
  padding: 0.8rem 1.5rem 1rem 1.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
  line-height: 1rem;
  outline: 0 none;
  text-decoration: none;
`;

export const Section = styled.section`
  padding: 2rem 1em;
  text-align: center;
  h3 {
    font-family: 'BeVietnamMedium', sans-serif;
    color: #9B9BA6;
    font-size: 1.2rem;
    line-height: 1.5em;
  }

  h2 {
    font-family: 'BeVietnamBold', sans-serif;
    color: hsl(228, 39%, 23%);
    font-size: 2rem;
    padding: 1rem 0;
  }

  ${breakpoint('tablet')`
    padding: 2rem 0;
    h2{
      font-size: 3rem;
    }
  `}
`;

export const BenefitsSection = styled(Section)`
  h2 {
    color: hsl(12, 88%, 59%);
  }
`;

export const HelpSection = styled(Section)`
    background-color: #eeeeee;
    padding: 0;
    text-align: left;
    ${PageSizer} {
      padding: 1rem;
      p {
        margin: 0;
        font-size: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #9B9BA6;
      }
      img {
        width: 2.5rem;
        margin-right: 1rem;
        margin-bottom: 0;
      }
    }
`;

export const BuySection = styled(Section)`
  background-color: hsl(12, 88%, 59%);
  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    display: flex;
    position: absolute;
    background: url(${props => props.bg}) top no-repeat;
    background-size: contain;
    width: 62%;
    height: 150%;
    z-index: 1;
    opacity: .1;
  }
  &:before {
    top: -4%;
    left: -23%;
  }
  &:after {
    bottom: -75%;
    right: -35%;
  }
  ${breakpoint('tablet')`
    &:after  {
      bottom: 66%;
      right: -44%;
    }
  `}
  ${breakpoint('desktop')`
    &:before,
    &:after {
      width: 56%;
      height: 220%;
    }
    &:before  {
      top: -20%;
      left: -5%;
    }
    &:after  {
      bottom: 20%;
      right: -39%;
    }
  `}
  .contentForm {
    position: relative;
    z-index: 5;
  }
  h2{
    color: #ffffff;
    font-size: 2rem;
  }
  h3 {
    color: #ffffff;
  }
`;

export const Problems = styled.div`
    max-width: 1000px;
    margin: 2rem auto 0 auto;
    ${breakpoint('tablet')`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    `}
`;

export const ProblemCard = styled.div`
  background-color: #eeeeee;
  padding: 1rem;
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  img {
    margin: 0;
    width: 3rem;
    margin-right: 0.5rem;
  }
  p {
    color: #9B9BA6;
    margin: 0;
  }

  ${breakpoint('tablet')`
    width: 48%;
  `}
`;

export const Benefits = styled.div`
    max-width: 1000px;
    margin: 2rem auto;
    h4 {
      color: hsl(228, 39%, 23%);
      padding-top: 1rem;
    }
    ${breakpoint('tablet')`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    `}
`;

export const BenefitCard = styled.div`
  background-color: #eeeeee;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-top: 5rem;
  border-radius: 0.5rem;
  div {
    padding: 1rem;
    display: inline-block;
    background: #fff;
    width: 7rem;
    border-radius: 50%;
    margin-top: -5rem;
  }
  img {
    margin: 0;
    margin-right: 0.5rem;
    background-color: #fff;
  }

  ${breakpoint('tablet')`
    width: 48%;
  `}
  ${breakpoint('desktop')`
    width: 32%;
  `}
`;

export const PriceNotes = styled.div`
  text-align: left;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  p {
    margin-bottom: 0.5rem;
  }
  li {
    margin-bottom: 0.2rem;
  }
  strong {
    font-family: 'BeVietnamBold', sans-serif;
  }
`;

export const Footer  = styled.footer`
  background-color: #1e1e26;
  text-align: center;
  color: #888890;
  a {
    color: #f3f4f9;
    text-decoration: none;
  }
  a:first-child {
    margin-right: 1rem;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    margin: 1rem 0 0 0;
  }
  ${PageSizer} {
    padding: 1rem;

  ${breakpoint('tablet')`
    display: flex;
    justify-content: space-between;
    flex-flow: row-reverse;
    p {
      margin: 0;
    }  
  `}
  }
`;


export const SectionForm = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2em;
  h3{
    ${breakpoint('mobile')`
      font-size: 1.2rem;
    `}
    ${breakpoint('tablet')`
      font-size: 1.5rem;
      width: 40rem;
      line-height: 1.3;
    `}
  }
`;

export const ContentWhatsApp  = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em 1em 2em;
  ${breakpoint('tablet')`
    width: 30%;
    padding: 1em;
  `}
`;

export const WhatsAppLogo  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
  ${breakpoint('tablet')`
    padding-bottom: 0;
  `}
  ${breakpoint('desktop')`
    padding-bottom: 1em;
  `}
`;

export const WhatsAppText  = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: .9em;
  margin-bottom: 1.1em;
  color: #fff;
  ${breakpoint('tablet')`
    line-height: 1.4;
  `}
  ${breakpoint('desktop')`
    font-size: .9em;
  `}
`;

export const WhatsAppButton  = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  background: #1e1e26;
  color: #fff;
  font-size: 0.9rem;
  line-height: 0.8rem;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: none;
  transition: all .5s;
  height: 42px;
  text-decoration: none;
  border-radius: 1.5rem;
  &:hover {
    background: #3e3e48;
  }
  &:focus {
    outline: none;
  }
`;

