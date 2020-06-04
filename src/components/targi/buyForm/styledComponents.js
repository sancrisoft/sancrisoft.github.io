import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';


export const ContentForm = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5em 2em;
    margin-bottom: 0;
    input {
      margin: 5px 0px;
      border: 1px solid #e2e2e2;
      padding: 8px;
      padding-left: 10px;
      font-size: 0.85rem;
      border-radius: 1.5rem;
      &:focus{
        border: 1px solid #f48600;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(124, 197, 118, 0.3);
      }
    }
    label {
      text-align: left;
      padding-left: 20px;
      color: #fff;
    }
    
    label.error {
      font-weight: normal;
      color: #fff;
      font-size: 14px;
      font-style: italic;
      position: relative;
      top: -4px;
    }  
    ${breakpoint('tablet')`
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-right: 2px solid #333;
    `}
  }
  ${breakpoint('tablet')`
    width: 70%;
  `}
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .notePhone {
    font-size: .7em;
    text-align: left;
    padding-left: 20px;
    color: #fff;
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
      border-radius: 1.5rem;
      &:hover {
        background: #3e3e48;
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


