import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const SectionContainer = styled.section`
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
      width: 120px;
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
        background: #111;
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
    ${breakpoint('mobile')`
      width: 100%;
    `}
    ${breakpoint('tablet')`
      width: 600px;
    `}
  }
`;
