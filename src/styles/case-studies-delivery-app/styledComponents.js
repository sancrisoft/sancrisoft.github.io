import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const ContentCase = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CasePageSizer = styled.div`
    margin: 0 auto;
    max-width: 90%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 3em 0 0;
    ${breakpoint('tablet')`
      max-width: 90%;
    `}
    ${breakpoint('desktop')`
      max-width: 78%;
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
