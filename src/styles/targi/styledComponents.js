import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

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
    margin-bottom: 1rem;
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
  ${breakpoint('desktop')`
  `}
`

export const CallToAction = styled.button`
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
`;

export const Section = styled.section`
  padding: 2rem 0;
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
    font-size: 2.5rem;
    padding: 1rem 0;
  }

  ${breakpoint('tablet')`
    h2{
      font-size: 3rem;
    }
  `}
  ${breakpoint('desktop')`
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

export const Problems = styled.div`
    max-width: 1000px;
    margin: 2rem auto 0 auto;
    ${breakpoint('tablet')`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    `}
    ${breakpoint('desktop')`
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
  ${breakpoint('desktop')`
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
    ${breakpoint('desktop')`
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
  `}
`;





export const ExperienceTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  color: #000;
  width: 100%;
  text-align: center;
`;

export const ExperienceSubtitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  padding-top: 14px;
  color: #000;
  width: 100%;
  text-align: center;
  ${breakpoint('tablet')`
    font-size: 2.5em;
  `}
  ${breakpoint('desktop')`
    font-size: 3em;
  `}
`;


export const Experiences = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 4em;
`;

export const TargiSolveTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  padding-top: 15px;
  color: #000;
  width: 100%;
  ${breakpoint('tablet')`
    font-size: 2.5em;
  `}
  ${breakpoint('desktop')`
    font-size: 3em;
  `}
`;

export const TargiSolveDesc = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  padding-top: 20px;
  color: #000;
  font-family: Averta;
  width: 100%;
  text-align: center;
`;

export const BoxTargiSolve = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 4em;
`;

export const ContentSupportTeam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2em;
  background: #ececec;
  padding: 1.2em;
`;

export const SupportTeamText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  margin: 0;
  margin-left: 1rem;
  width: 80%;
  ${breakpoint('tablet')`
    width: 100%;
  `}
`;

export const TitleBig = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #000;
  width: 100%;
  padding-top: .5em;
  text-align: center;
  ${breakpoint('tablet')`
    font-size: 2.5em;
  `}
  ${breakpoint('desktop')`
    font-size: 3em;
  `}
`;

export const TitleDesc = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  padding-top: 1.2em;
  color: #000;
  font-family: Averta;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  line-height: 1.4;
  ${breakpoint('desktop')`
    width: 750px;
  `}
`;

export const SectionForm = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #ececec;
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
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5em 2em;
    margin-bottom: 0;
    input {
      margin: 5px 0px;
      border-radius: 3px;
      border: 1px solid #e2e2e2;
      padding: 8px;
      padding-left: 10px;
      font-size: 0.85rem;
      &:focus{
        border: 1px solid #f48600;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(124, 197, 118, 0.3);
      }
    }
    textarea {
      min-height: 150px;
      resize: none;
    }
    
    label.error {
      font-weight: normal;
      color: #d61400;
      font-size: 14px;
      font-style: italic;
      position: relative;
      top: -4px;
    }  
    ${breakpoint('tablet')`
      width: 70%;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-right: 2px solid #333;
    `}
  }
`;

export const ContentForm = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .notePhone {
    font-size: .7em;
  }
  .wrapper_button {
    display: flex;
    justify-content: center;
    padding-top: 1em;
    ${breakpoint('tablet')`
      justify-content: flex-start;
      padding-top: 0;
    `}
    .input-btn {
      width: 100%;
      background: #f48600;
      color: #fff;
      font-size: 0.9rem;
      line-height: 0.8rem;
      text-transform: capitalize;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      border: none;
      transition: all .5s;
      height: 42px;
      &:hover {
        border-color: #F28724;
        background: #FFA449;
      }
      &:focus {
        outline: none;
      }
    }
  }
  ${breakpoint('tablet')`
    width: 48%;
    input {
      width: 100%;
    }
  `}
`;

export const ContentWhatsapp  = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em 1em 2em;
  ${breakpoint('tablet')`
    width: 30%;
    padding: 1em;
  `}
`;

export const WhatsappLogo  = styled.div`
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

export const WhatsappText  = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: .9em;
  margin-bottom: 1.1em;
  ${breakpoint('tablet')`
    line-height: 1.4;
  `}
  ${breakpoint('desktop')`
    font-size: .9em;
  `}
`;

export const WhatsappButton  = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  background: #f48600;
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
  &:hover {
    background: #FFA449;
  }
  &:focus {
    outline: none;
  }
`;

export const FooterInfo  = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1em 2em;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterLeft = styled.div`
  display: flex;
  align-item: center;
  justify-content: flex-start;
  width: 100%;
  h2 {
    font-size: 1em;
    margin-bottom: 0;
  }
  ${breakpoint('tablet')`
    width: 40%;
  `}
`;

export const FooterRight = styled.div`
  display: flex;
  align-item: center;
  width: 100%;
  padding-top: 1em;
  justify-content: space-between;
  ${breakpoint('tablet')`
    width: 60%;
    padding-top: 0;
    justify-content: flex-end;
  `}
`;

export const FooterLink = styled.a`
  display: flex;
  font-size: .9em;
  color: #f48600;
  ${breakpoint('tablet')`
    margin-left: 1.2em;
  `}
`;
