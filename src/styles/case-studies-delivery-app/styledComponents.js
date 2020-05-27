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
    ${breakpoint('tablet')`
      max-width: 90%;
    `}
    ${breakpoint('desktop')`
      max-width: 78%;
    `}
`;

export const ContentLittleSatisfied = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 2em;
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
`;

export const ExperienceSubtitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  padding-top: 14px;
  color: #000;
  ${breakpoint('md')`
    font-size: 2.5em;
  `}
  ${breakpoint('xl')`
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

export const ContentTargiSolve = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 2em;
  ${breakpoint('tablet')`
    max-width: 90%;
  `}
  ${breakpoint('desktop')`
    max-width: 78%;
  `}
`;

export const TargiSolveTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  padding-top: 15px;
  color: #000;
  ${breakpoint('md')`
    font-size: 2.5em;
  `}
  ${breakpoint('xl')`
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
  margin-top: 4em;
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
`;

export const SectionForm = styled.section`
  padding: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-top: 1em;
    input, textarea {
      margin: 5px 0px;
      border-radius: 3px;
      border: 1px solid #e2e2e2;
      padding: 8px;
      padding-left: 10px;
      font-size: 0.85rem;
      &:focus{
        border: 1px solid #f48600;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(124, 197, 118, 0.3);
        -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(124, 197, 118, 0.3);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(124, 197, 118, 0.3);
      }
    }
    textarea {
      min-height: 150px;
      resize: none;
    }
    .input-btn {
      margin-top: 1rem;
      width: 180px;
      height: 35px;
      background: #f48600;
      border-radius: 4px;
      color: #ffffff;
      font-size: 0.85rem;
      line-height: 0.8rem;
      text-transform: capitalize;
      transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
    label.error {
      font-weight: normal;
      color: #d61400;
      font-size: 14px;
      font-style: italic;
      position: relative;
      top: -4px;
    }
    .wrapper_button {
      display: flex;
      justify-content: center;
      padding-top: 1em;
      ${breakpoint('tablet')`
        justify-content: flex-start;
        padding-top: 0;
      `}
      button {
        border: none;
        transition: all .5s;
        &:hover {
          border-color: #F28724;
          background: #FFA449;
        }
        &:focus {
          outline: none;
        }
      }
    }
    .content-youSell {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 30px 0;
      h3 {
        width: 100%;
        font-size: 18px;
        margin-bottom: 20px;
      }
      .item-youSell {
        width: 48%;
        margin-bottom: 10px;
        ${breakpoint('tablet')`
          width: initial;
          margin-bottom: 0;
        `}
        input {
          height: 15px;
          width: 15px;
        }
        label {
          margin-left: 5px;
          font-size: 15px;
        }
      }
    }
    ${breakpoint('mobile')`
      width: 100%;
    `}
    ${breakpoint('tablet')`
      width: 600px;
    `}
  }
`;
